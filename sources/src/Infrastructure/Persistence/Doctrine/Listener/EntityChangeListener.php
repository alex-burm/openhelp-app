<?php

namespace App\Infrastructure\Persistence\Doctrine\Listener;

use Doctrine\Bundle\DoctrineBundle\Attribute\AsDoctrineListener;
use Doctrine\ORM\Event\PostPersistEventArgs;
use Doctrine\ORM\Event\PostRemoveEventArgs;
use Doctrine\ORM\Event\PostUpdateEventArgs;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\Attribute\When;

#[When('dev')]
#[AsDoctrineListener(event: Events::postPersist)]
#[AsDoctrineListener(event: Events::postUpdate)]
#[AsDoctrineListener(event: Events::postRemove)]
class EntityChangeListener
{
    public function __construct(
        protected LoggerInterface $logger,
    ) {
    }

    public function postPersist(PostPersistEventArgs $args): void
    {
        $this->logChangeSet($args);
    }

    public function postUpdate(PostUpdateEventArgs $args): void
    {
        $this->logChangeSet($args);
    }

    public function postRemove(PostRemoveEventArgs $args): void
    {
        $this->logChangeSet($args);
    }

    protected function logChangeSet(LifecycleEventArgs $args): void
    {
        $entity = $args->getObject();
        $entityManager = $args->getObjectManager();

        $meta = $args->getObjectManager()
            ->getClassMetadata($entity::class);

        $changeset = $entityManager->getUnitOfWork()->getEntityChangeSet($entity);

        $this->logger->info('Entity changed', [
            'entity' => \get_class($entity),
            'primary' => $meta->getIdentifierValues($entity),
            'changeset' => $changeset,
        ]);
    }
}
