<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleStatusDto;
use App\Application\Article\Dto\ArticleTogglePublicationDto;
use App\Domain\Article\Event\ArticleUpdated;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

class ArticleTogglePublicationService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(ArticleTogglePublicationDto $dto): ArticleStatusDto
    {
        $article = $this->repository->findOneById(Uuid::fromRfc4122($dto->id));


        if (false === $article->getStatus()->is($dto->publish)) {
            $article->toggleStatus();

            $this->repository->save($article);
            $this->eventDispatcher->dispatch(new ArticleUpdated($article));
        }

        return new ArticleStatusDto(
            id: $article->getId()->toRfc4122(),
            published: $article->getStatus()->isPublished(),
        );
    }
}
