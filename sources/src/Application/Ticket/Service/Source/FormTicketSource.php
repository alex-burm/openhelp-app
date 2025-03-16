<?php

namespace App\Application\Ticket\Service\Source;

use App\Application\Ticket\Dto\TicketDraftDto;
use App\Domain\Ticket\Service\TicketSourceInterface;

class FormTicketSource implements TicketSourceInterface
{
    public function __construct(
        public string $ticketTitle,
        public string $ticketMessage,
        public string $userName,
        public string $userEmail,
    ) {}

    public function getNextTicketDraft(): ?TicketDraftDto
    {
        return new TicketDraftDto(
            $this->ticketTitle,
            $this->ticketMessage,
            $this->userName,
            $this->userEmail,
        );
    }
}
