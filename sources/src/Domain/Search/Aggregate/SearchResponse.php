<?php

namespace App\Domain\Search\Aggregate;

use App\Domain\Search\ValueObject\SearchAggregationCollection;
use App\Domain\Search\ValueObject\SearchMeta;
use App\Domain\Search\ValueObject\SearchResultCollection;
use App\Domain\Search\ValueObject\SearchSuggest;

readonly class SearchResponse
{
    public function __construct(
        public SearchResultCollection $results,
        public SearchMeta $meta,
        public ?SearchSuggest $suggests = null,
        public ?SearchAggregationCollection $aggregations = null,
    ) {
    }

    public function getTotal(): int
    {
        return $this->meta->total;
    }

    public function hasSuggestions(): bool
    {
        return false === $this?->suggests->isEmpty();
    }

    public function hasAggregations(): bool
    {
        return false === $this?->aggregations->isEmpty();
    }
}

