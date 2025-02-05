<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Infrastructure\Persistence\Doctrine\Mapper\AbstractDoctrineMapper;
use Doctrine\ORM\EntityManagerInterface;

abstract class AbstractDoctrineRepository
{
    const DOMAIN_CLASS_NAME = null;
    const DOCTRINE_CLASS_NAME = null;

    protected EntityManagerInterface $entityManager;

    protected AbstractDoctrineMapper $mapper;

    public function delete(object $domainObject): void
    {
        $this->entityManager->remove(
            $this->mapper->toDoctrine($domainObject)
        );
        $this->entityManager->flush();
    }

    public function save(object $domainObject): void
    {
        $doctrineObject = $this->mapper->toDoctrine($domainObject);

        if (\is_null($doctrineObject->getId())) {
            $this->entityManager->persist($doctrineObject);
            $this->entityManager->flush();
            return;
        }

        if (false === $this->entityManager->contains($doctrineObject)) {
            $doctrineObject = $this->entityManager->getReference(static::DOCTRINE_CLASS_NAME, $domainObject->getId());
        }
        $this->entityManager->persist($doctrineObject);
        $this->entityManager->flush();
    }
}
