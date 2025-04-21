<?php

namespace App\Application\Ticket\Dto;

use App\Domain\Ticket\ValueObject\TicketChannel;

class TicketDraftDto
{
    public function __construct(
        public string $ticketTitle,
        public string $ticketMessage,
        public TicketChannel $ticketChannel,
        public ?string $userName = null,
        public ?string $userEmail = null,
    ) {
    }
}
