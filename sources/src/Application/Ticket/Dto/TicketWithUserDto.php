<?php

namespace App\Application\Ticket\Dto;

use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Symfony\Component\Uid\Uuid;

final readonly class TicketWithUserDto
{
    public function __construct(
        public Uuid   $ticketId,
        public ?int   $customerId,
        public ?int   $assigneeId,
        public string $ticketTitle,
        public int $ticketStatus,
        public int $ticketPriority,
    ) {}


    public function getTicketPriorityIcon(): string
    {
        return match (TicketPriority::from($this->ticketPriority)) {
            TicketPriority::LOW => 'icon-low-priority',
            TicketPriority::MEDIUM => 'icon-medium-priority',
            TicketPriority::HIGH => 'icon-high-priority',
        };
    }
}
