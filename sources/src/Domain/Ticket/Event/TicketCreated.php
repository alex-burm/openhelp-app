<?php

namespace App\Domain\Ticket\Event;

use App\Domain\Common\Event\EventInterface;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\User\Entity\User;

readonly class TicketCreated implements EventInterface
{
    public function __construct(
        public Ticket $ticket,
        public ?User $user,
    ) {
    }
}
