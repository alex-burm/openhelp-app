<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepository;
use App\Domain\Workspace\Entity\Workspace;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Doctrine\ORM\EntityManagerInterface;

readonly class DoctrineUserRepository implements UserRepository
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
}
