<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleSaveDto;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Entity\Article;
use Symfony\Component\Uid\Uuid;

class ArticleSaveService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(ArticleSaveDto $dto): Article
    {
        $article = $this->repository->findOneById(Uuid::fromString($dto->id));
        dd($article);
//        $article->updateContent($command->content);
//        $this->repository->save($article);
//        $this->events->dispatch(new ArticleUpdated($article->getId()));
    }
}
