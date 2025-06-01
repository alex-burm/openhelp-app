<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Service\TicketStatsService;
use App\Domain\Ticket\ValueObject\TicketPriority;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class PriorityDistribution
{
    public TicketPriority $priority;

    public function __construct(
        protected TicketStatsService $ticketStatsService,
    ) {
    }

    public function getCounter(): int
    {
        return $this->ticketStatsService->getCountByPriority($this->priority);
    }

    public function getIcon(): string
    {
        return match ($this->priority) {
            TicketPriority::HIGH => 'icon-high-priority',
            TicketPriority::MEDIUM => 'icon-medium-priority',
            TicketPriority::LOW => 'icon-low-priority',
        };
    }
}
