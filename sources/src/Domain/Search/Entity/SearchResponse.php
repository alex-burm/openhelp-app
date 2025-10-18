<?php

namespace App\Domain\Search\Entity;

use App\Domain\Search\ValueObject\SearchMeta;
use App\Domain\Search\ValueObject\SearchSuggest;

readonly class SearchResponse
{
    public function __construct(
        public SearchResultCollection $results,
        public ?SearchSuggest $suggests = null,
        public ?SearchMeta $meta = null,
    ) {}
}

