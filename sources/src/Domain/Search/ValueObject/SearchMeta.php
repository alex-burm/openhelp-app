<?php

namespace App\Domain\Search\ValueObject;

class SearchMeta
{
    public function __construct(
        public readonly int $total,
        public readonly ?int $limit = null,
        public readonly ?int $offset = null,
    ) {}
}

