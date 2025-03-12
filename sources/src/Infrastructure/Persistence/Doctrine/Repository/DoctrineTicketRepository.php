<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Repository\TicketRepository;
use App\Domain\Ticket\ValueObject\Counter\TicketChannelsCount;
use App\Domain\Ticket\ValueObject\Counter\TicketPrioritiesCount;
use App\Domain\Ticket\ValueObject\Counter\TicketStatusesCount;
use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepository;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineTicketMapper;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Mapping\ClassMetadata;
use Symfony\Component\Uid\Uuid;

class DoctrineTicketRepository implements TicketRepository
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineTicket::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineTicketMapper   $mapper,
    ) {
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


}
