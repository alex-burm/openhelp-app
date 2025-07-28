<?php

namespace App\Application\Article\Dto;

class ArticleSaveDto
{
    public function __construct(
        public ?string $id = null,
        public ?string $title = null,
        public ?string $content = null,
    ) {
    }
}
