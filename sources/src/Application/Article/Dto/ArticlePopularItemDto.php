<?php

namespace App\Application\Article\Dto;

class ArticlePopularItemDto
{
    public function __construct(
        public string $id,
        public string $title,
        public string $content,
        public ?string $categoryName,
    ) {
    }
}
