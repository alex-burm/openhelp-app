<?php

namespace App\Domain\Article\Event;

use App\Domain\Article\Entity\Article;
use App\Domain\Common\Event\EventInterface;

readonly class ArticleDeleted implements EventInterface
{
    public function __construct(
        public Article $article
    ) {
    }
}
