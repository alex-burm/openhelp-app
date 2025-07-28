<?php

namespace App\Application\Article\Service;

use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Article\Entity\Article;
use Symfony\Component\Uid\Uuid;

class ArticleCreateOrGetService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
        protected EventDispatcherInterface   $eventDispatcher,
    ) {
    }

    public function __invoke(?Uuid $id = null): Article
    {
        if (\is_null($id)) {
            $article = new Article();
            $this->repository->save($article);
        } else {
            $article = $this->repository->findOneById($id);
        }

        if (\is_null($article)) {
            throw new \LogicException('Article not found');
        }
        return $article;
    }
}
