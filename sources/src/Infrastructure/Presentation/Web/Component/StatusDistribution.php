<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Service\TicketStatsService;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class StatusDistribution
{
    public TicketStatus $status;

    public function __construct(
        protected TicketStatsService $ticketStatsService,
    ) {
    }

    public function getCounter(): int
    {
        return $this->ticketStatsService->getCountByStatus($this->status);
    }
}
