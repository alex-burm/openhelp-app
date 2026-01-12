<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Article\Dto\ArticleQueryDto;
use App\Application\Article\Service\ArticlePublicSearchService;
use App\Application\Ticket\Service\TicketStatsService;
use App\Domain\Search\Aggregate\SearchResponse;
use App\Domain\Ticket\ValueObject\TicketChannel;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class SearchResults
{
    public string $search = '';

    public function __construct(
        protected ArticlePublicSearchService $searchService,
    ) {
    }

    protected function process(): SearchResponse
    {
        static $response = null;
        if (\is_null($response)) {
            $response = ($this->searchService)(new ArticleQueryDto(\trim($this->search)));
        }
        return $response;
    }

    public function getCategories(): iterable
    {
        $response = $this->process();

        if (false === $response->hasAggregations()) {
            return [];
        }

        foreach ($response->aggregations as $aggregation) {
            yield [
                'name' => $aggregation->name,
                'count' => $aggregation->count,
            ];
        }
    }

    public function getItems(): iterable
    {
        $response = $this->process();
        foreach ($response->results as $item) {
            yield [
                'title' => $item->title,
                'url' => $item->url,
                'category' => $item->meta['category'] ?? '',
                'description' => \array_slice($item->meta['description'], 0, 2),
            ];
        }
    }

    public function getTotal(): int
    {
        return $this->process()->getTotal();
    }
}
