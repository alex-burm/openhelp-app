<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

trait DoctrineRepositoryTrait
{
    private function _findOneById(int $id): ?object
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('r')
            ->from(static::DOCTRINE_CLASS_NAME, 'r')
            ->where('r.id = :id')
            ->setParameter(':id', $id);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

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
        if (\is_null($domainObject->getId())) {
            $doctrineObject = $this->mapper->toDoctrine($domainObject);
        } else {
            $reference = $this->entityManager->getReference(static::DOCTRINE_CLASS_NAME, $domainObject->getId());
            $doctrineObject = $this->mapper->toDoctrine($domainObject, $reference);
        }

        $this->entityManager->persist($doctrineObject);
        $this->entityManager->flush();
        $domainObject->setId($doctrineObject->getId());
    }
}
