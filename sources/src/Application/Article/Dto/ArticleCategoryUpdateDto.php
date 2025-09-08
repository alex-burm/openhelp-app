<?php

namespace App\Application\Article\Dto;

class ArticleCategoryUpdateDto
{
    public function __construct(
        public string $id,
        public string $categoryId,
    ) {}
}
