<?php

namespace App\Infrastructure\Persistence\Elastic\SearchProvider;

use App\Application\Search\Dto\SuggestItem;
use App\Application\Search\SearchProviderInterface;
use App\Domain\Search\Entity\SearchResultCollection;
use App\Domain\Search\Entity\SearchResultItem;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Domain\Search\ValueObject\SearchProviderType;
use App\Infrastructure\Service\WorkspaceContext;
use Elastic\Elasticsearch\Client;

class SuggestSearchProvider implements SearchProviderInterface
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
        return SearchProviderType::SUGGEST;
    }

    public function getIndexName(): string
    {
        return $this->index->value;
    }

    public function index(object $dto): void
    {
        if (false === ($dto instanceof SuggestItem)) {
            throw new \InvalidArgumentException('Expected SuggestItem');
        }

        $this->client->index([
            'index' => $this->getIndexName(),
            'id' => $dto->type->value . '_' . $dto->id,
            'body' => [
                'id' => $dto->id,
                'title' => $dto->title,
                'suggest' => [
                    'input' => $dto->inputs,
                    'contexts' => [
                        'type'  => $dto->type,
                        'space_id' => $this->workspaceContext->getCurrentWorkspace()->getId(),
                    ],
                ],
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
                'mappings' => [
                    'properties' => [
                        'id'      => ['type' => 'keyword', 'index' => false],
                        'title'   => ['type' => 'keyword', 'index' => false],
                        'meta'    => ['type' => 'object', 'enabled' => false],
                        'suggest' => [
                            'type' => 'completion',
                            'contexts' => [
                                [
                                    'name' => 'space_id',
                                    'type' => 'category',
                                ],
                                [
                                    'name' => 'type',
                                    'type' => 'category',
                                ],
                            ]
                        ],
                    ]
                ]
            ]
        ]);
    }

    public function search(string $query, array $filters = [], int $limit = 10): SearchResultCollection
    {
        $completion = [
            'field' => 'suggest',
            'size' => $limit,
            'skip_duplicates' => true,
            'contexts' => [
                'space_id' => $this->workspaceContext->getCurrentWorkspace()->getId(),
            ],
        ];

        $body = [
            'suggest' => [
                'autocomplete' => [
                    'prefix' => $query,
                    'completion' => $completion,
                ]
            ],
        ];

        $resp = $this->client->search([
            'index' => $this->getIndexName(),
            'body' => $body
        ]);

        $items = new SearchResultCollection();
        foreach ($resp['suggest']['autocomplete'][0]['options'] ?? [] as $hit) {
            $source = $hit['_source'];

            $items->add(new SearchResultItem(
                id: $source['id'],
                type: $source['suggest']['contexts']['type'],
                url: $source['meta']['url'],
                title: $source['title'],
                meta: $source['meta'],
            ));
        }
        return $items;
    }
}
