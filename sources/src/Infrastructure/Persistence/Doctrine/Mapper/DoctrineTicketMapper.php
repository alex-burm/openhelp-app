<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use Doctrine\ORM\EntityManagerInterface;

readonly final class DoctrineTicketMapper
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
    ) {
    }

    public function toDoctrine(Ticket $domainObject, ?DoctrineTicket $entity = null): DoctrineTicket
    {
        if (null === $entity) {
            $entity = new DoctrineTicket();
        }

        $entity->setId($domainObject->getId());

        if (\is_null($domainObject->getCustomerId())) {
            $entity->setCustomer(null);
        } else {
            $entity->setCustomer($this->entityManager->getReference(DoctrineUser::class, $domainObject->getCustomerId()));
        }

        if (\is_null($domainObject->getAssigneeId())) {
            $entity->setAssignee(null);
        } else {
            $entity->setAssignee($this->entityManager->getReference(DoctrineUser::class, $domainObject->getAssigneeId()));
        }

        $entity->setTitle($domainObject->getTitle());
        $entity->setMessage($domainObject->getMessage());
        $entity->setPriority($domainObject->getPriority()->value);
        $entity->setStatus($domainObject->getStatus()->value);
        $entity->setChannel($domainObject->getChannel()->value);
        $entity->setCreatedAt($domainObject->getCreatedAt());
        $entity->setUpdatedAt($entity->getUpdatedAt() ?? $domainObject->getCreatedAt());

        return $entity;
    }

    public function fromDoctrine(DoctrineTicket $doctrineObject): Ticket
    {
        $ticket = new Ticket(
            $doctrineObject->getId(),
            $doctrineObject->getTitle(),
            $doctrineObject->getMessage(),
            $doctrineObject->getCustomer()?->getId(),
            $doctrineObject->getAssignee()?->getId(),
            TicketPriority::from($doctrineObject->getPriority()),
            TicketStatus::from($doctrineObject->getStatus()),
            TicketChannel::from($doctrineObject->getChannel()),
        );

        $ticket->setCreatedAt($doctrineObject->getCreatedAt());
        return $ticket;
    }
}
