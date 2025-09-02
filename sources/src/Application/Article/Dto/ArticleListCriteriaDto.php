<?php

namespace App\Application\Article\Dto;

class ArticleListCriteriaDto
{
    public function __construct(
        public ?string $title = null,
        public ?string $sortBy = null,
        public ?string $sortOrder = 'asc',
        public ?int    $limit = null,
        public ?int    $offset = null,
    ) {
        if (false === \in_array(\strtolower($this->sortOrder), ['asc', 'desc'])) {
            $this->sortOrder = 'asc';
        }

        if (false === \in_array($this->sortBy, ['status', 'updatedAt', 'title'])) {
            $this->sortBy = 'updatedAt';
        }
    }
}
