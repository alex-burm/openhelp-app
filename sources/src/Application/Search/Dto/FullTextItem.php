<?php

namespace App\Application\Search\Dto;

use App\Domain\Search\ValueObject\SearchIndex;

class FullTextItem
{
    public function __construct(
        public string $id,
        public string $type,
        public string $title,
        public array $inputs = [],
        public array $scope = [SearchIndex::PUBLIC],
        public array $meta = [],
        public ?string $url = null,
    ) {}
}

