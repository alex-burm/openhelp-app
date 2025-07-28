<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Article\Entity\Article;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineArticle;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineArticleMapper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;

class DoctrineArticleRepository implements ArticleRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineArticle::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineArticleMapper $mapper,
    ) {
    }

    public function save(Article $article): void
    {
        $this->_save($article);
    }

    public function delete(Article $article): void
    {
        $this->_delete($article);
    }

    public function findOneById(Uuid $id): ?Article
    {
        return $this->_findOneById($id);
    }
}
