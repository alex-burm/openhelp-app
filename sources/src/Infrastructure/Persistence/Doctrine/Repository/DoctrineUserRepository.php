<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepository;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class DoctrineUserRepository implements UserRepository
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineUser::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineUserMapper     $mapper,
    ) {
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

    public function findOneByUsername(string $username): ?User
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('u')
            ->from(DoctrineUser::class, 'u')
            ->where('u.login = :username')
            ->orWhere('u.email = :username')
            ->setParameter(':username', $username);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
    }

    public function findOneByLogin(string $login): ?User
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('u')
            ->from(DoctrineUser::class, 'u')
            ->where('u.login = :login')
            ->setParameter(':login', $login);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
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
