<?php

namespace App\Infrastructure\Persistence\Elastic\SearchProvider;

use App\Application\Search\Dto\FulltextItem;
use App\Application\Search\SearchProviderInterface;
use App\Domain\Search\Entity\SearchResponse;
use App\Domain\Search\Entity\SearchResultCollection;
use App\Domain\Search\Entity\SearchResultItem;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Domain\Search\ValueObject\SearchMeta;
use App\Domain\Search\ValueObject\SearchProviderType;
use App\Domain\Search\ValueObject\SearchSuggest;
use App\Infrastructure\Service\WorkspaceContext;
use Elastic\Elasticsearch\Client;

class FullTextSearchProvider implements SearchProviderInterface
{
    protected SearchIndex $index;

    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected Client $client,
    ) {
    }

    public function withIndex(SearchIndex $index): self
    {
        $clone = clone $this;
        $clone->index = $index;
        return $clone;
    }

    public function getType(): SearchProviderType
    {
        return SearchProviderType::FULLTEXT;
    }

    public function getIndexName(): string
    {
        return $this->index->value;
    }

    public function index(object $dto): void
    {
        \assert($dto instanceof FulltextItem, \sprintf('Expected FulltextItem, got %s', \get_class($dto)));

        $this->client->index([
            'index' => $this->getIndexName(),
            'id' => $dto->type->value . '_' . $dto->id,
            'body' => [
                'id' => $dto->id,
                'space_id' => $this->workspaceContext->getCurrentWorkspace()->getId(),
                'title' => $dto->title,
                'type'     => $dto->type->value,
                'meta' => $dto->meta
            ]
        ]);
    }

    public function delete(string $id): void
    {
        $this->client->delete([
            'index' => $this->getIndexName(),
            'id' => $id,
        ]);
    }

    public function reset(): void
    {
        $this->client->indices()->delete([
            'index' => $this->getIndexName(),
            'ignore_unavailable' => true
        ]);

        $this->client->indices()->create([
            'index' => $this->getIndexName(),
            'body' => [
                'settings' => [
                    'analysis' => [
                        'analyzer' => [
                            'trigram_analyzer' => [
                                'tokenizer' => 'standard',
                                'filter' => ['lowercase', 'shingle']
                            ]
                        ]
                    ]
                ],
                'mappings' => [
                    'properties' => [
                        'id'      => ['type' => 'keyword', 'index' => false],
                        'space_id' => ['type' => 'keyword'],
                        'meta'    => ['type' => 'object', 'enabled' => false],
                        'title' => [
                            'type' => 'text',
                            'fields' => [
                                'trigram' => [
                                    'type' => 'text',
                                    'analyzer' => 'trigram_analyzer'
                                ]
                            ]
                        ],
                    ]
                ]
            ]
        ]);
    }

    public function search(string $query, array $filters = [], int $limit = 10): SearchResponse
    {
        $body = [
            'size' => $limit,
            'query' => [
                'bool' => [
                    'must' => [
                        [
                            'term' => [
                                'space_id' => $this->workspaceContext->getCurrentWorkspace()->getId(),
                            ]
                        ]
                    ],
                    'should' => [
                        [
                            'wildcard' => [
                                'title' => [
                                    'value' => '*' . $query . '*',
                                    'boost' => 0.5,
                                    'rewrite' => 'constant_score',
                                ],
                            ]
                        ],
                        [
                            'match' => [
                                'title' => [
                                    'query' => $query,
                                    'boost' => 2,
                                    'operator' => 'and',
                                    'fuzziness' => 'auto',
                                ]
                            ]
                        ]
                    ],
                    'minimum_should_match' => 1,
                ],
            ],
            'suggest' => [
                'simple_phrase' => [
                    'text' => $query,
                    'phrase' => [
                        'field' => 'title',
                        'size' => 3,
                        'gram_size' => 3,
                        'direct_generator' => [
                            [
                                'field' =>'title',
                                'suggest_mode' =>'always'
                            ]
                        ],
                        'highlight' =>[
                            'pre_tag' => '<em>',
                            'post_tag' => '</em>'
                        ]
                    ]
                ]
            ],
        ];

        $resp = $this->client->search([
            'index' => $this->getIndexName(),
            'body' => $body,
        ]);

        $items = new SearchResultCollection();
        foreach ($resp['hits']['hits'] ?? [] as $hit) {
            $source = $hit['_source'];

            $items->add(new SearchResultItem(
                id: $source['id'],
                type: $source['type'],
                url: $source['meta']['url'],
                title: $source['title'],
                meta: $source['meta'],
            ));
        }
        $suggests = $resp['suggest']['simple_phrase'][0]['options'] ?? [];
        $suggests = \array_map(static fn($option) => $option['text'], $suggests);
        $suggests = new SearchSuggest($suggests);

        $meta = new SearchMeta(
            total: $resp['hits']['total']['value'] ?? 0,
            limit: $limit,
            offset: 0,
        );

        return new SearchResponse(
            results: $items,
            suggests: $suggests,
            meta: $meta
        );
    }
}
