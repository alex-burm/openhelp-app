<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Application\Article\Dto\ArticleListCriteriaDto;
use App\Application\Article\Dto\ArticleListItemDto;
use App\Application\Article\Dto\ArticleListResultDto;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Article\Entity\Article;
use App\Domain\Article\ValueObject\ArticleStatus;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineArticle;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineArticleMapper;
use Doctrine\DBAL\ParameterType;
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
        $qb = $this->entityManager->createQueryBuilder()
            ->select('r')
            ->from(static::DOCTRINE_CLASS_NAME, 'r')
            ->where('r.id = :id')
            ->setParameter(':id', $id->toBinary(), ParameterType::BINARY);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
    }

    public function findByCriteria(ArticleListCriteriaDto $criteria): ArticleListResultDto
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('r')
            ->from(static::DOCTRINE_CLASS_NAME, 'r')
            ->leftJoin('r.category', 'c');


        $this->applyCriteriaFilters($qb, $criteria);

        $countQb = $this->entityManager->createQueryBuilder()
            ->select('COUNT(r.id)')
            ->from(static::DOCTRINE_CLASS_NAME, 'r');

        $this->applyCriteriaFilters($countQb, $criteria);

        $totalCount = (int) $countQb->getQuery()->getSingleScalarResult();

        if ($criteria->sortBy) {
            $orderDirection = strtoupper($criteria->sortOrder ?? 'ASC');
            $qb->orderBy('r.' . $criteria->sortBy, $orderDirection);
        } else {
            $qb->orderBy('r.createdAt', 'DESC');
        }

        if ($criteria->limit) {
            $qb->setMaxResults($criteria->limit);
        }
        if ($criteria->offset) {
            $qb->setFirstResult($criteria->offset);
        }

        $doctrineArticles = $qb->getQuery()->getResult();

        $items = \array_map(function (DoctrineArticle $doctrineArticle) {
            return new ArticleListItemDto(
                id: $doctrineArticle->getId()->toRfc4122(),
                title: $doctrineArticle->getTitle() ?: 'Untitled article',
                status: ArticleStatus::from($doctrineArticle->getStatus()),
                categoryName: $doctrineArticle->getCategory()?->getName(),
                updatedAt: $doctrineArticle->getUpdatedAt(),
            );
        }, $doctrineArticles);

        return new ArticleListResultDto($items, $totalCount);
    }

    private function applyCriteriaFilters($qb, ArticleListCriteriaDto $criteria): void
    {
        if ($criteria->title) {
            $qb->andWhere('r.title LIKE :title')
                ->setParameter('title', '%' . $criteria->title . '%');
        }
    }

}
