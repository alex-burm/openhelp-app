<?php

namespace App\Application\Search\Dto;

use App\Domain\Search\ValueObject\SearchEntityType;

class FullTextItem
{
    public function __construct(
        public string $id,
        public string $title,
        public array $inputs = [],
        public array $meta = [],
        public SearchEntityType $type,
    ) {}
}
