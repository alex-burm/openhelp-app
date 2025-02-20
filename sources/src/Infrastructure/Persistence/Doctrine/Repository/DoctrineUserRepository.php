<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepository;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;

class DoctrineUserRepository extends EntityRepository implements UserRepository
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineUser::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineUserMapper     $mapper,
    ) {
        parent::__construct($entityManager, new ClassMetadata(DoctrineUser::class));
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

    public function findOneByLogin(string $login): ?User
    {
        $doctrineObject = $this->findOneBy([
            'login' => $login,
        ]);
        return $this->getOneOrNothing($doctrineObject);
    }

    public function findOneByEmail(string $email): ?User
    {
        $doctrineObject = $this->findOneBy([
            'email' => $email,
        ]);
        return $this->getOneOrNothing($doctrineObject);
    }
}
