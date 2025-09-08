<?php

namespace App\Application\Category\Service;

use App\Domain\Category\Entity\Category;
use App\Domain\Category\ValueObject\DefaultCategoryEnum;
use App\Domain\Category\Repository\CategoryRepositoryInterface;

class CreateDefaultCategoriesService
{
    public function __construct(
        protected CategoryRepositoryInterface $categoryRepository,
    ) {
    }

    public function __invoke(): void
    {
        foreach (DefaultCategoryEnum::cases() as $defaultCategory) {
            $category = new Category(
                title: $defaultCategory->value,
            );

            $this->categoryRepository->save($category);
        }
    }
}
