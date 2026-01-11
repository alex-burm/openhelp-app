<?php

namespace App\Infrastructure\Persistence\Elastic\SearchProvider;

use App\Application\Search\Dto\FullTextGroupItem;
use App\Application\Search\SearchProviderInterface;
use App\Domain\Search\Aggregate\SearchResponse;
use App\Domain\Search\ValueObject\SearchAggregation;
use App\Domain\Search\ValueObject\SearchAggregationCollection;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Domain\Search\ValueObject\SearchMeta;
use App\Domain\Search\ValueObject\SearchProviderType;
use App\Domain\Search\ValueObject\SearchResultCollection;
use App\Domain\Search\ValueObject\SearchResultItem;
use App\Domain\Search\ValueObject\SearchSuggest;
use App\Infrastructure\Service\WorkspaceContext;
use Elastic\Elasticsearch\Client;

class FullTextSearchGroupProvider implements SearchProviderInterface
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
        return SearchProviderType::GROUP;
    }

    public function getIndexName(): string
    {
        return $this->index->value;
    }

    public function index(object $dto): void
    {
        \assert($dto instanceof FullTextGroupItem, \sprintf('Expected FullTextGroupItem, got %s', \get_class($dto)));

        $this->client->index([
            'index' => $this->getIndexName(),
            'id' => $dto->type->value . '_' . $dto->id,
            'body' => [
                'id' => $dto->id,
                'space_id' => $this->workspaceContext->getCurrentWorkspace()->getId(),
                'title' => $dto->title,
                'category' => $dto->category,
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
                        'category' => [
                            'type' => 'keyword',
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
                    'filter' => [
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
            'aggs' => [
                'by_category' => [
                    'terms' => [
                        'field' => 'category',
                    ]
                ],
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
                meta: $source['meta'] + ['category' => $source['category']],
            ));
        }

        $aggregations = new SearchAggregationCollection();
        foreach ($resp['aggregations']['by_category']['buckets'] ?? [] as $bucket) {
            $aggregations->add(new SearchAggregation(
                name: $bucket['key'],
                count: $bucket['doc_count']
            ));
        }

        $meta = new SearchMeta(
            total: $resp['hits']['total']['value'] ?? 0,
            limit: $limit,
            offset: 0,
        );

        return new SearchResponse(
            results: $items,
            meta: $meta,
            aggregations: $aggregations
        );
    }
}
