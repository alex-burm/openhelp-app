<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

trait DoctrineRepositoryTrait
{
    private function _findOneById(int $id): ?object
    {
        $doctrineObject = $this->find($id);
        return $this->getOneOrNothing($doctrineObject);
    }

    private function getOneOrNothing(?object $doctrineObject): ?object
    {
        return $doctrineObject ? $this->mapper->fromDoctrine($doctrineObject) : null;
    }

    private function _delete(object $domainObject): void
    {
        $this->entityManager->remove(
            $this->mapper->toDoctrine($domainObject)
        );
        $this->entityManager->flush();
    }

    private function _save(object $domainObject): void
    {
        $doctrineObject = $this->mapper->toDoctrine($domainObject);

        if (false === \is_null($doctrineObject->getId())) {
            $doctrineReference = $this->entityManager->getReference(static::DOCTRINE_CLASS_NAME, $doctrineObject->getId());
            if (false === $this->entityManager->contains($doctrineReference)) {
                $this->entityManager->persist($doctrineObject);
            }
        } else {
            $this->entityManager->persist($doctrineObject);
        }

        $this->entityManager->flush();
        $domainObject->setId($doctrineObject->getId());
    }
}
