<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticlePopularItemDto;
use App\Domain\Article\Repository\ArticleRepositoryInterface;

class ArticlePopularListService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
    ) {
    }

    /**
     * @return ArticlePopularItemDto[]
     */
    public function __invoke(int $limit = 4): array
    {
        return $this->repository->findPopular($limit);
    }
}
