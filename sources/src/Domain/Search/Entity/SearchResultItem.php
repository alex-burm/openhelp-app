<?php

namespace App\Domain\Search\Entity;

readonly class SearchResultItem
{
    public function __construct(
        public string $id,
        public string $type,
        public string $url,
        public string $title,
        public array $meta = [],
    ) {}
}
