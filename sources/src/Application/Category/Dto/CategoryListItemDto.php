<?php

namespace App\Application\Category\Dto;

class CategoryListItemDto
{
    public function __construct(
        public string $id,
        public string $name,
        public int $articleCount,
    ) {
    }
}
