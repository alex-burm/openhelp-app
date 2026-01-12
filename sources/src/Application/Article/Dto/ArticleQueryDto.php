<?php

namespace App\Application\Article\Dto;

class ArticleQueryDto
{
    public function __construct(
        public string $query
    ) {
    }
}
