<?php

namespace App\Application\Article\Dto;

class ArticleViewDto
{
    public function __construct(
        public string $id,
        public string $title,
        public string $content,
        public bool $isPublished,
    ) {
    }
}
