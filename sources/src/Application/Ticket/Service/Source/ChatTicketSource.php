<?php

namespace App\Application\Ticket\Service\Source;

use App\Application\Ticket\Dto\TicketDraftDto;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Service\TicketSourceInterface;
use App\Domain\Ticket\ValueObject\TicketChannel;

class ChatTicketSource implements TicketSourceInterface
{
    public function __construct(
    ) {}

    public function getNextTicketDraft(): ?TicketDraftDto
    {
        return new TicketDraftDto(
            ticketTitle: Ticket::DEFAULT_TITLE,
            ticketMessage: '',
            ticketChannel: TicketChannel::CHAT
        );
    }
}
