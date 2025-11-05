<?php

namespace App\Domain\Search\ValueObject;

readonly class SearchAggregation
{
    public function __construct(
        public string $name,
        public int    $count,
    ) {}
}
