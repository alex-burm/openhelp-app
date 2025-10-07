<?php

namespace App\Application\Search\Dto;

readonly class SearchQuery
{
    public function __construct(
        public string $query,
        public array $filters = [],
        public int $limit = 10,
    ) {
    }
}
