<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleListCriteriaDto;
use App\Application\Article\Dto\ArticleListResultDto;
use App\Domain\Article\Repository\ArticleRepositoryInterface;

class ArticleListService
{
    public function __construct(
        protected ArticleRepositoryInterface $repository,
    ) {
    }

    public function __invoke(ArticleListCriteriaDto $criteria): ArticleListResultDto
    {
        return $this->repository->findByCriteria($criteria);
    }
}
