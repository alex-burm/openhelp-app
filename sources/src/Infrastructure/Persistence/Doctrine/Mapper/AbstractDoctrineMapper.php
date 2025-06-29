<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;

readonly abstract class AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = null;
    const DOCTRINE_CLASS_NAME = null;

    public function __construct(
        protected SerializerInterface $serializer,
        protected EntityManagerInterface $entityManager,
    ) {
    }

    public function toDoctrine(object $domainObject, ?object $entity = null): object
    {
        //AbstractObjectNormalizer::SKIP_NULL_VALUES => true
        $normalizedData = \array_filter($this->serializer->normalize($domainObject), fn ($x) => null !== $x);

        $doctrineObject = $this->serializer->denormalize(
            $normalizedData,
            static::DOCTRINE_CLASS_NAME,
            null,
            [AbstractNormalizer::OBJECT_TO_POPULATE => $entity]
        );

        if (false === \is_null($domainObject->getId())) {
            return $this->entityManager->getReference(static::DOCTRINE_CLASS_NAME, $domainObject->getId());
        }
        return $doctrineObject;
    }

    public function fromDoctrine(object $doctrineObject): object
    {
        $normalizedData = \array_filter($this->serializer->normalize($doctrineObject), fn ($x) => null !== $x);
        return $this->serializer->denormalize(
            $normalizedData,
            static::DOMAIN_CLASS_NAME
        );
    }
}
