<?php

namespace App\Application\Category\Dto;

use App\Domain\Category\Entity\Category;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use Symfony\Component\Uid\Uuid;

class CategoryGetService
{
    public function __construct(
        protected CategoryRepositoryInterface $repository,
    ) {
    }

    public function __invoke(string $id): Category
    {
        $category = $this->repository->findOneById(Uuid::fromRfc4122($id));
        if (\is_null($category)) {
            throw new \LogicException('Category not found');
        }
        return $category;
    }
}
