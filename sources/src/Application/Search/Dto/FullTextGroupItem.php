<?php

namespace App\Application\Search\Dto;

use App\Domain\Search\ValueObject\SearchEntityType;

class FullTextGroupItem
{
    public function __construct(
        public string $id,
        public string $title,
        public string $category,
        public array $inputs = [],
        public array $meta = [],
        public SearchEntityType $type,
    ) {}
}
