<?php

namespace App\Application\Article\Dto;

use App\Domain\Article\ValueObject\ArticleStatus;

class ArticleListItemDto
{
    public function __construct(
        public string $id,
        public string $title,
        public ArticleStatus $status,
        public ?string $categoryName,
        public \DateTimeImmutable $updatedAt,
    ) {
    }
}
