<?php

namespace App\Application\Ticket\Service;

use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Ticket\Event\TicketUpdateEvent;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\TicketPriority;
use Symfony\Component\Uid\Uuid;

class TicketChangePriorityService
{
    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected EventDispatcherInterface $eventDispatcher
    ) {
    }

    public function process(Uuid $ticketId, TicketPriority $priority): TicketUpdateEvent
    {
        $ticket = $this->ticketRepository->findOneById($ticketId);
        $ticket->setPriority($priority);

        $this->ticketRepository->save($ticket);

        return $this->eventDispatcher->dispatch(new TicketUpdateEvent($ticket));
    }
}
