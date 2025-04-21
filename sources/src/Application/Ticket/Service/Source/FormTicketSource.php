<?php

namespace App\Application\Ticket\Service\Source;

use App\Application\Ticket\Dto\TicketDraftDto;
use App\Domain\Ticket\Service\TicketSourceInterface;
use App\Domain\Ticket\ValueObject\TicketChannel;

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
            ticketTitle: $this->ticketTitle,
            ticketMessage: $this->ticketMessage,
            ticketChannel: TicketChannel::FORM,
            userName: $this->userName,
            userEmail: $this->userEmail,
        );
    }
}
