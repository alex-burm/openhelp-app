<?php

namespace App\Application\Article\Dto;

class ArticleSaveDto
{
    public function __construct(
        public string $id,
        public string $title,
        public string $content,
    ) {
    }
}
