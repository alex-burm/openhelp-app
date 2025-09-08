<?php

namespace App\Application\Category\Dto;

class CategorySaveDto
{
    public function __construct(
        public ?string $id,
        public string $name,
    ) {
    }
}
