<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleViewDto;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use Symfony\Component\Uid\Uuid;

class ArticleGetService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
    ) {
    }

    public function __invoke(string $id): ArticleViewDto
    {
        $article = $this->repository->findOneById(Uuid::fromRfc4122($id));
        if (\is_null($article)) {
            throw new \LogicException('Article not found');
        }
        return new ArticleViewDto(
            id: $article->getId()->toRfc4122(),
            title: $article->getTitle(),
            content: $article->getContent(),
            categoryId: $article->getCategoryId(),
            isPublished: $article->getStatus()->isPublished(),
        );
    }
}
