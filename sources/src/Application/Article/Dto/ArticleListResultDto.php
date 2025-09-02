<?php

namespace App\Application\Article\Dto;

class ArticleListResultDto
{
    /**
     * @param ArticleListItemDto[] $items
     */
    public function __construct(
        public array $items,
        public int $totalCount,
    ) {
    }
}
