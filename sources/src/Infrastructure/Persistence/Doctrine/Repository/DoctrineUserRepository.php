<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepositoryInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class DoctrineUserRepository extends EntityRepository implements UserRepositoryInterface, ServiceEntityRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineUser::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineUserMapper     $mapper,
    ) {
        parent::__construct($this->entityManager, new ClassMetadata(self::DOCTRINE_CLASS_NAME));
    }

    public function delete(User $user): void
    {
        $this->_delete($user);
    }

    public function save(User $user): void
    {
        $this->_save($user);
    }

    public function findOneById(int $id): ?User
    {
        return $this->_findOneById($id);
    }

    public function findOneByEmail(string $email): ?User
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('u')
            ->from(DoctrineUser::class, 'u')
            ->where('u.email = :email')
            ->setParameter(':email', $email);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
    }
}
