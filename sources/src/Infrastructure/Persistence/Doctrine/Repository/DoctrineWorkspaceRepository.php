<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepository;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineWorkspace;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineWorkspaceMapper;
use Doctrine\ORM\EntityManagerInterface;

readonly class DoctrineWorkspaceRepository implements WorkspaceRepository
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineWorkspace::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineWorkspaceMapper $mapper,
    ) {
    }

    public function findOneById(int $id): ?Workspace
    {
        return $this->_findOneById($id);
    }

    public function findOneByCode(string $code): ?Workspace
    {
        $doctrineWorkspace = $this->entityManager
            ->getRepository(DoctrineWorkspace::class)
            ->findOneByCode($code);

        return $this->getOneOrNothing($doctrineWorkspace);
    }

    public function delete(Workspace $workspace): void
    {
        $this->_delete($workspace);
    }

    public function save(Workspace $workspace): void
    {
        $this->_save($workspace);
    }
}
