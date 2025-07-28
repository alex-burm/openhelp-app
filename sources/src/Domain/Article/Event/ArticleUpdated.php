<?php

namespace App\Domain\Article\Event;

use App\Domain\Entity\Article;

readonly class ArticleUpdated
{
    public function __construct(
        public Article $article
    ) {
    }
}
