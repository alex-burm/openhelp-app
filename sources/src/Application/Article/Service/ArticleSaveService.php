<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleSaveDto;
use App\Domain\Article\Event\ArticleUpdated;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

class ArticleSaveService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(ArticleSaveDto $dto): void
    {
        $article = $this->repository->findOneById(Uuid::fromRfc4122($dto->id));
        $article->setTitle($dto->title);
        $article->setContent($dto->content);

        $this->repository->save($article);
        $this->eventDispatcher->dispatch(new ArticleUpdated($article));
    }
}
