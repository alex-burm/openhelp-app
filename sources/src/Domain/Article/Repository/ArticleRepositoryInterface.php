<?php

namespace App\Domain\Article\Repository;

use App\Application\Article\Dto\ArticleListCriteriaDto;
use App\Application\Article\Dto\ArticleListResultDto;
use App\Domain\Article\Entity\Article;
use Symfony\Component\Uid\Uuid;

interface ArticleRepositoryInterface
{
    public function findOneById(Uuid $id): ?Article;

    public function save(Article $article): void;

    public function delete(Article $article): void;

    public function findByCriteria(ArticleListCriteriaDto $criteria): ArticleListResultDto;
}
