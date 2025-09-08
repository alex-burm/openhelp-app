<?php

namespace App\Application\Category\Service;

use App\Application\Category\Dto\CategorySaveDto;
use App\Domain\Category\Entity\Category;
use App\Domain\Category\Event\CategoryUpdated;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

class CategorySaveService
{
    public function __construct(
        protected CategoryRepositoryInterface $repository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(CategorySaveDto $dto): void
    {
        if (\is_null($dto->id)) {
            $category = new Category();
        } else {
            $category = $this->repository->findOneById(Uuid::fromRfc4122($dto->id));
        }

        if (\is_null($category)) {
            throw new \LogicException('Category not found');
        }

        $category->setName($dto->name);

        $this->repository->save($category);
        $this->eventDispatcher->dispatch(new CategoryUpdated($category));
    }
}
