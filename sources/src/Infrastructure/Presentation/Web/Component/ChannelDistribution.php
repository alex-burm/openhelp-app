<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Service\TicketStatsService;
use App\Domain\Ticket\ValueObject\TicketChannel;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class ChannelDistribution
{
    public TicketChannel $channel;

    public function __construct(
        protected TicketStatsService $ticketStatsService,
    ) {
    }

    public function getCounter(): int
    {
        return $this->ticketStatsService->getCountByChannel($this->channel);
    }
}
