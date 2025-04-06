<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Messaging\Entity\Message;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineMessage;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use Doctrine\ORM\EntityManagerInterface;

readonly final class DoctrineMessageMapper
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
    ) {
    }

    public function toDoctrine(Message $domainObject, ?DoctrineMessage $entity = null): DoctrineMessage
    {
        if (null === $entity) {
            $entity = new DoctrineMessage();
        }

        $entity->setId($domainObject->getId());
        $entity->setTicket($this->entityManager->getReference(DoctrineTicket::class, $domainObject->getTicketId()));
        $entity->setText($domainObject->getText());
        $entity->setCreatedAt($domainObject->getCreatedAt());
        $entity->setSentAt($domainObject->getSentAt());

        if (false === \is_null($domainObject->getUserId())) {
            $user = $this->entityManager->getReference(DoctrineUser::class, $domainObject->getUserId());
            $entity->setUser($user);
        } else {
            $entity->setUser(null);
        }

        return $entity;
    }

    public function fromDoctrine(DoctrineMessage $doctrineObject): Message
    {
        $message = new Message(
            $doctrineObject->getTicket()->getId(),
            $doctrineObject->getText(),
            $doctrineObject->getSentAt(),
        );

        $message->setCreatedAt($doctrineObject->getCreatedAt());
        $message->setUserId($doctrineObject->getUser()?->getId());
        return $message;
    }
}
