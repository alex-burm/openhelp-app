<?php

namespace App\Application\Article\Dto;

class ArticlePopularDto
{
    public function __construct(
        public string $id,
        public bool $popular,
    ) {
    }
}
