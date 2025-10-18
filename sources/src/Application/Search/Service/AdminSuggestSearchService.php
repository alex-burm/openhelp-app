<?php

namespace App\Application\Search\Service;

use App\Application\Search\SearchProviderLocator;
use App\Domain\Search\Entity\SearchResponse;
use App\Domain\Search\ValueObject\SearchProviderType;
use App\Domain\Search\ValueObject\SearchIndex;

class AdminSuggestSearchService
{
    public function __construct(
        protected SearchProviderLocator $locator,
    ) {
    }

    public function __invoke(string $query): SearchResponse
    {
        return $this->locator
            ->lookup(SearchProviderType::FULLTEXT)
            ->withIndex(SearchIndex::MANAGER_GLOBAL)
            ->search($query);
    }
}
