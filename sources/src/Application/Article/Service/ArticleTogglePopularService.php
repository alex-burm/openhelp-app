<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticlePopularDto;
use App\Application\Article\Dto\ArticleTogglePopularDto;
use App\Domain\Article\Event\ArticleUpdated;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

class ArticleTogglePopularService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(ArticleTogglePopularDto $dto): ArticlePopularDto
    {
        $article = $this->repository->findOneById(Uuid::fromRfc4122($dto->id));

        if ($article->isPopular() !== $dto->popular) {
            $article->setPopular($dto->popular);

            $this->repository->save($article);
            $this->eventDispatcher->dispatch(new ArticleUpdated($article));
        }

        return new ArticlePopularDto(
            id: $article->getId()->toRfc4122(),
            popular: $article->isPopular(),
        );
    }
}
