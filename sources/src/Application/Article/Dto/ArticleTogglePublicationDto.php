<?php

namespace App\Application\Article\Dto;

class ArticleTogglePublicationDto
{
    public function __construct(
        public string $id,
        public bool $publish,
    ) {}
}
