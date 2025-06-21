<?php

namespace App\Domain\Ticket\Event;

use App\Domain\Common\Event\EventInterface;
use App\Domain\Ticket\Entity\Ticket;

readonly class TicketUpdateEvent implements EventInterface
{
    public function __construct(
        public Ticket $ticket,
    ) {
    }
}
