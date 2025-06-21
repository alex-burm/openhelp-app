<?php

namespace App\Application\Ticket\Service;

use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;
use App\Domain\Messaging\ValueObject\MessageType;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Event\TicketCreated;
use App\Domain\Ticket\Event\TicketUpdateEvent;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\Service\TicketSourceInterface;
use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\ValueObject\Role;
use App\Domain\User\ValueObject\RoleCollection;
use Symfony\Component\Uid\Uuid;

class TicketAssignAgentService
{
    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected EventDispatcherInterface $eventDispatcher
    ) {
    }

    public function assignAgent(Uuid $ticketId, int $userId): TicketUpdateEvent
    {
        return $this->process($ticketId, $userId);
    }

    public function resetAgent(Uuid $ticketId): TicketUpdateEvent
    {
        return $this->process($ticketId);
    }

    protected function process(Uuid $ticketId, ?int $userId = null): TicketUpdateEvent
    {
        $ticket = $this->ticketRepository->findOneById($ticketId);
        $ticket->setAssigneeId($userId);

        $this->ticketRepository->save($ticket);

        return $this->eventDispatcher->dispatch(new TicketUpdateEvent($ticket));
    }
}
