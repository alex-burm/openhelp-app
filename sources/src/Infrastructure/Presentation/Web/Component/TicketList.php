<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;

#[AsLiveComponent]
class TicketList
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public int $status = TicketStatus::NEW->value;

    #[LiveProp(writable: true)]
    public string $search = '';

    public ?TicketSummaryView $selected = null;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
    ) {
    }

    #[ExposeInTemplate]
    public function getTickets(): TicketSummaryCollectionDto
    {
        return $this->ticketRepository->findByStatus(TicketStatus::from($this->status));
    }

    #[LiveAction]
    public function details(
        #[LiveArg]
        string $ticketId,
    ): void
    {
        $ticketSummary = $this->ticketRepository->getSummary(Uuid::fromString($ticketId));

        $this->selected = $ticketSummary;

        // save recent viewed
        $this->recentTicketRepository->saveRecent($ticketSummary);
    }
}
