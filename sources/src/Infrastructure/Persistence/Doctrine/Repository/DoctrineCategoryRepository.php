<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Application\Category\Dto\CategoryListItemDto;
use App\Application\Category\Dto\CategoryListResultDto;
use App\Domain\Category\Entity\Category;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineCategory;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineCategoryMapper;
use Doctrine\DBAL\ParameterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;

class DoctrineCategoryRepository implements CategoryRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineCategory::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineCategoryMapper $mapper,
    ) {
    }

    public function save(Category $category): void
    {
        $this->_save($category);
    }

    public function delete(Category $category): void
    {
        $this->_delete($category);
    }

    public function findOneById(Uuid $id): ?Category
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

    public function findAllWithArticleCount(): CategoryListResultDto
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->from(static::DOCTRINE_CLASS_NAME, 'c');

        $results = $qb
            ->select('
            c.id,
            c.name,
            COUNT(a.id) as article_count
        ')
//            ->leftJoin('c.articles', 'a')
            ->leftJoin('App\Infrastructure\Persistence\Doctrine\Entity\DoctrineArticle', 'a',
                'WITH', 'a.category = c.id')
            ->groupBy('c.id')
            ->getQuery()
            ->getArrayResult();

        return new CategoryListResultDto(\array_map(
            static fn(array $data): CategoryListItemDto => new CategoryListItemDto(
                $data['id'],
                $data['name'],
                $data['article_count']
            ),
            $results
        ));
    }
}
