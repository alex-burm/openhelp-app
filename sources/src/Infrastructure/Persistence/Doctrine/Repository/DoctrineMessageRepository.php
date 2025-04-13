<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Application\Messaging\Dto\MessageViewCollectionDto;
use App\Domain\Messaging\Collection\MessageCollection;
use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;
use App\Domain\Messaging\ValueObject\MessageDirection;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineMessage;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineMessageMapper;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;

class DoctrineMessageRepository implements MessageRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineMessage::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineMessageMapper $mapper,
    ) {
    }

    public function save(Message $message): void
    {
        $this->_save($message);
    }

    public function findByTicketId(Uuid $ticketId, ?int $currentUserId = null): MessageViewCollectionDto
    {
        $dql = <<<DQL
            SELECT NEW App\Application\Messaging\Dto\MessageViewDto(
                m.id,
                m.clientId,
                m.text,
                m.type,
                CASE
                    WHEN m.user IS NULL OR m.user = :currentUserId THEN :directionOut
                    ELSE :directionIn
                END,
                m.sentAt,
                u.name
            )
            FROM App\Infrastructure\Persistence\Doctrine\Entity\DoctrineMessage m
            LEFT JOIN m.user u
            WHERE m.ticket = :ticketId
            ORDER BY m.sentAt ASC
        DQL;

        $result = $this->entityManager->createQuery($dql)
            ->setParameter('ticketId', $ticketId->toBinary())
            ->setParameter('currentUserId', $currentUserId)
            ->setParameter('directionOut', MessageDirection::TYPE_OUTGOING->value)
            ->setParameter('directionIn', MessageDirection::TYPE_INCOMING->value)
            ->getResult();

        return new MessageViewCollectionDto($result);
    }
}
