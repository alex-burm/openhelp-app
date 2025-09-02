<?php

namespace App\Application\Article\Service;

use App\Domain\Article\Event\ArticleDeleted;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use Symfony\Component\Uid\Uuid;

readonly class ArticleDeleteService
{
    public function __construct(
        protected ArticleRepositoryInterface $articleRepository,
        protected EventDispatcherInterface $eventDispatcher,
    ) {
    }

    public function __invoke(Uuid $id): bool
    {
        $article = $this->articleRepository->findOneById($id);

        if (\is_null($article)) {
            return false;
        }

        $this->articleRepository->delete($article);
        $this->eventDispatcher->dispatch(new ArticleDeleted($article));
        return true;
    }
}
