<?php

namespace App\Domain\Ticket\ValueObject\Counter;

use App\Domain\Ticket\ValueObject\TicketStatus;

readonly class TicketStatusesCount
{
    public function __construct(
        public int $new = 0,
        public int $inProgress = 0,
        public int $resolved = 0,
    ) {
    }

    public function getByStatus(TicketStatus $status): int
    {
        return match ($status) {
            TicketStatus::NEW => $this->new,
            TicketStatus::IN_PROGRESS => $this->inProgress,
            TicketStatus::RESOLVED => $this->resolved,
        };
    }
}
