<?php

namespace App\Application\Article\Dto;

class ArticleTogglePopularDto
{
    public function __construct(
        public string $id,
        public bool $popular,
    ) {
    }
}
