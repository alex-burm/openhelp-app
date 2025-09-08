<?php

namespace App\Domain\Category\Repository;

use App\Application\Category\Dto\CategoryListResultDto;
use App\Domain\Category\Entity\Category;
use Symfony\Component\Uid\Uuid;

interface CategoryRepositoryInterface
{
    public function findOneById(Uuid $id): ?Category;

    public function save(Category $category): void;

    public function delete(Category $category): void;

    public function findAllWithArticleCount(): CategoryListResultDto;
}
