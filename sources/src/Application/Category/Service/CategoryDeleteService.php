<?php

namespace App\Application\Category\Service;

use App\Domain\Category\Event\CategoryDeleted;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

readonly class CategoryDeleteService
{
    public function __construct(
        protected CategoryRepositoryInterface $categoryRepository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(Uuid $id): bool
    {
        $category = $this->categoryRepository->findOneById($id);

        if (\is_null($category)) {
            return false;
        }

        $this->categoryRepository->delete($category);
        $this->eventDispatcher->dispatch(new CategoryDeleted($category));
        return true;
    }
}
