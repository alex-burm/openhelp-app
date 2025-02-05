<?php

namespace App\Infrastructure\Persistence\Doctrine\Listener;

use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineWorkspace;
use App\Infrastructure\Persistence\Doctrine\Entity\WorkspaceAwareEntity;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineWorkspaceMapper;
use App\Infrastructure\Service\WorkspaceContext;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PrePersistEventArgs;

class WorkspaceListener
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected WorkspaceContext $workspaceContext,
        protected DoctrineWorkspaceMapper $workspaceMapper,
    ) {
    }

    public function prePersist(PrePersistEventArgs $args): void
    {
        $entity = $args->getObject();
        if (false === ($entity instanceof WorkspaceAwareEntity)) {
            return;
        }

        $workspaceReference = $this->entityManager
            ->getReference(
                DoctrineWorkspace::class,
                $this->workspaceContext->getCurrentWorkspace()->getId()
            );

        $entity->setWorkspace($workspaceReference);
    }
}
