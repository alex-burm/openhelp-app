<?php

namespace App\Application\Ticket\Dto;

class TicketDraftDto
{
    public function __construct(
        public string $ticketTitle,
        public string $ticketMessage,
        public ?string $userName = null,
        public ?string $userEmail = null,
    ) {
    }
}
