<?php

namespace App\Application\Category\Service;

use App\Application\Category\Dto\CategoryListResultDto;
use App\Domain\Category\Repository\CategoryRepositoryInterface;

class CategoryListService
{
    public function __construct(
        protected CategoryRepositoryInterface $repository,
    ) {
    }

    public function __invoke(): CategoryListResultDto
    {
        return $this->repository->findAllWithArticleCount();
    }
}
