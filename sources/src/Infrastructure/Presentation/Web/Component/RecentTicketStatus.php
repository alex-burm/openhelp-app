<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class RecentTicketStatus
{
    use DefaultActionTrait;

    public TicketSummaryView $item;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
    ) {
    }

    #[LiveAction]
    public function setStatus(
        #[LiveArg] Uuid $ticketId,
        #[LiveArg] TicketStatus $status
    ): void {
        $ticket = $this->ticketRepository->findOneById($ticketId);
        $ticket->setStatus($status);

        $this->ticketRepository->save($ticket);

        $ticketSummary = $this->ticketRepository->getSummary($ticket->getId());
        $this->recentTicketRepository->saveRecent($ticketSummary);

        $this->item = $ticketSummary;
    }
}
