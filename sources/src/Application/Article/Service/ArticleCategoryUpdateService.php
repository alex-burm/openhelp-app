<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleCategoryUpdateDto;
use App\Application\Article\Dto\ArticleStatusDto;
use App\Application\Category\Dto\CategoryGetService;
use App\Domain\Article\Event\ArticleUpdated;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

class ArticleCategoryUpdateService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected CategoryGetService $categoryGetService,
        protected EventDispatcherInterface   $eventDispatcher,
    ) {
    }

    public function __invoke(ArticleCategoryUpdateDto $dto): ArticleCategoryUpdateDto
    {
        $article = $this->repository->findOneById(Uuid::fromRfc4122($dto->id));
        if (\is_null($article)) {
            throw new \LogicException('Article not found');
        }

        $categoryId = null;
        if (false === \is_null($dto->categoryId)) {
            ($this->categoryGetService)($dto->categoryId);
            $categoryId = Uuid::fromRfc4122($dto->categoryId);
        }

        $article->setCategoryId($categoryId);
        $this->repository->save($article);
        $this->eventDispatcher->dispatch(new ArticleUpdated($article));

        return new ArticleCategoryUpdateDto(
            id: $article->getId()->toRfc4122(),
            categoryId: $article->getCategoryId(),
        );
    }
}
