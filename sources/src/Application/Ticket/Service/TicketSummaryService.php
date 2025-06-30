<?php

namespace App\Application\Ticket\Service;

use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use Symfony\Component\Uid\Uuid;

class TicketSummaryService
{
    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
    ) {
    }

    public function getSummary(Uuid $ticketId): TicketSummaryView
    {
        return $this->ticketRepository->getSummary($ticketId);
    }
}
