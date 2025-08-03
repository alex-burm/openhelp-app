<?php

namespace App\Application\Article\Dto;

use App\Domain\Article\Entity\Article;

class ArticleStatusDto
{
    public function __construct(
        public string $id,
        public bool $published,
    ) {}
}
