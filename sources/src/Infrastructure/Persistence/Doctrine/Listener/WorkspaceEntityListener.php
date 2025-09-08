<?php

namespace App\Infrastructure\Persistence\Doctrine\Listener;

use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineWorkspace;
use App\Infrastructure\Persistence\Doctrine\Entity\WorkspaceAwareEntity;
use App\Infrastructure\Service\WorkspaceContext;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Event\PrePersistEventArgs;
use Doctrine\ORM\Events;

#[AsDoctrineListener(event: Events::prePersist)]
class WorkspaceEntityListener
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected WorkspaceContext $workspaceContext,
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
