<?php

namespace App\Application\Ticket\ReadModel;

use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;

final readonly class TicketSummaryView
{
    public function __construct(
        public string $ticketId,
        public string $ticketTitle,
        public string $ticketChannel,
        public string $ticketStatus,
        public string $ticketPriority,
        public ?string $assigneeId,
        public ?string $assigneeName,
        public ?string $customerId,
        public ?string $customerName,
        public int $unreadCount,
        public \DateTimeImmutable $updatedAt,
    ) {
    }

    public function getTicketPriorityIcon(): string
    {
        return match (TicketPriority::from($this->ticketPriority)) {
            TicketPriority::LOW => 'icon-low-priority',
            TicketPriority::MEDIUM => 'icon-medium-priority',
            TicketPriority::HIGH => 'icon-high-priority',
        };
    }

    public function getTicketPriorityLabel(): string
    {
        return TicketPriority::from($this->ticketPriority)->getLabel();
    }

    public function getTicketPriorityBackground(): string
    {
        return match (TicketPriority::from($this->ticketPriority)) {
            TicketPriority::LOW => 'success',
            TicketPriority::MEDIUM => 'warning',
            TicketPriority::HIGH => 'error',
        };
    }

    public function getTicketStatusBackground(): string
    {
        return match (TicketStatus::from($this->ticketStatus)) {
            TicketStatus::NEW => 'error',
            TicketStatus::IN_PROGRESS => 'warning',
            TicketStatus::RESOLVED => 'success',
        };
    }

    public function getTicketStatusLabel(): string
    {
        return TicketStatus::from($this->ticketStatus)->getLabel();
    }

    public function getTicketChannelIcon(): string
    {
        return match (TicketChannel::from($this->ticketChannel)) {
            TicketChannel::EMAIL => 'icon-mail',
            TicketChannel::FORM => 'icon-form',
            TicketChannel::CHAT => 'icon-chat',
        };
    }
}
