<?php

namespace App\Domain\Ticket\ValueObject\Counter;

use App\Domain\Ticket\ValueObject\TicketPriority;

readonly class TicketPrioritiesCount
{
    public function __construct(
        public int $low = 0,
        public int $medium = 0,
        public int $high = 0,
    ) {
    }

    public function getByPriority(TicketPriority $status): int
    {
        return match ($status) {
            TicketPriority::LOW => $this->low,
            TicketPriority::MEDIUM => $this->medium,
            TicketPriority::HIGH => $this->high,
        };
    }
}
