<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\Counter\TicketChannelsCount;
use App\Domain\Ticket\ValueObject\Counter\TicketPrioritiesCount;
use App\Domain\Ticket\ValueObject\Counter\TicketStatusesCount;
use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineTicketMapper;
use Doctrine\DBAL\ParameterType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;

class DoctrineTicketRepository implements TicketRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineTicket::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineTicketMapper   $mapper,
    ) {
    }

    private function _findOneById(Uuid $id): ?object
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('r')
            ->from(static::DOCTRINE_CLASS_NAME, 'r')
            ->where('r.id = :id')
            ->setParameter(':id', $id->toBinary(), ParameterType::BINARY);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
    }

    public function countPerStatus(): TicketStatusesCount
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('t.status, COUNT(t.id) as count')
            ->from(DoctrineTicket::class, 't')
            ->groupBy('t.status')
            ->getQuery();

        $results = $qb->getResult();

        $data = [];
        foreach ($results as $row) {
            $data[TicketStatus::from($row['status'])->toCamelCase()] = (int)$row['count'];
        }

        return new TicketStatusesCount(...$data);
    }

    public function countPerPriority(): TicketPrioritiesCount
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('t.priority, COUNT(t.id) as count')
            ->from(DoctrineTicket::class, 't')
            ->groupBy('t.priority')
            ->getQuery();

        $results = $qb->getResult();

        $data = [];
        foreach ($results as $row) {
            $data[TicketPriority::from($row['priority'])->toCamelCase()] = (int)$row['count'];
        }

        return new TicketPrioritiesCount(...$data);
    }

    public function countPerChannel(): TicketChannelsCount
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('t.channel, COUNT(t.id) as count')
            ->from(DoctrineTicket::class, 't')
            ->groupBy('t.channel')
            ->getQuery();

        $results = $qb->getResult();

        $data = [];
        foreach ($results as $row) {
            $data[TicketChannel::from($row['channel'])->toCamelCase()] = (int)$row['count'];
        }

        return new TicketChannelsCount(...$data);
    }

    public function findOneById(Uuid $id): ?Ticket
    {
        return $this->_findOneById($id);
    }

    public function save(Ticket $ticket): void
    {
        $this->_save($ticket);
    }

    public function delete(Ticket $ticket): void
    {
        $this->_delete($ticket);
    }

    public function findByStatus(TicketStatus $status): TicketSummaryCollectionDto
    {
        $dql = <<<DQL
            SELECT NEW App\Application\Ticket\ReadModel\TicketSummaryView(
                t.id,
                t.title,
                t.channel,
                t.status,
                t.priority,
                assignee.id,
                assignee.name,
                customer.id,
                customer.name,
                0,
                t.createdAt
            )
            FROM App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket t
            LEFT JOIN t.customer customer
            LEFT JOIN t.assignee assignee
            WHERE t.status = :status
            ORDER BY t.createdAt DESC
        DQL;

        $result = $this->entityManager->createQuery($dql)
            ->setParameter('status', $status->value)
            ->getResult();

        return new TicketSummaryCollectionDto($result);
    }

    public function getSummary(Uuid $ticketId): ?TicketSummaryView
    {
        $dql = <<<DQL
            SELECT NEW App\Application\Ticket\ReadModel\TicketSummaryView(
                t.id,
                t.title,
                t.channel,
                t.status,
                t.priority,
                assignee.id,
                assignee.name,
                customer.id,
                customer.name,
                0,
                t.createdAt
            )
            FROM App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket t
            LEFT JOIN t.customer customer
            LEFT JOIN t.assignee assignee
            WHERE t.id = :id
        DQL;

        return $this->entityManager->createQuery($dql)
            ->setParameter(':id', $ticketId->toBinary(), ParameterType::BINARY)
            ->setMaxResults(1)
            ->getOneOrNullResult();
    }
}
