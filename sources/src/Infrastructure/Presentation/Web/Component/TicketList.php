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
use Symfony\UX\LiveComponent\Attribute\PostHydrate;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use Symfony\UX\TwigComponent\Attribute\PostMount;

#[AsLiveComponent]
class TicketList
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public int $status = TicketStatus::NEW->value;

    #[LiveProp(writable: true)]
    public string $search = '';

    #[LiveProp(writable: true)]
    public ?string $selected = null;

    private ?TicketSummaryCollectionDto $cached = null;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
    ) {
    }

    #[ExposeInTemplate]
    public function getTickets(): TicketSummaryCollectionDto
    {
        if (\strlen($this->search) > 0) {
            return new TicketSummaryCollectionDto();
        }
        return $this->cached ??= $this->ticketRepository->findByStatus(TicketStatus::from($this->status));
    }

    #[LiveAction]
    public function details(
        #[LiveArg]
        string $ticketId,
    ): void {
        $ticketSummary = $this->ticketRepository->getSummary(Uuid::fromString($ticketId));

        $this->selected = $ticketSummary->ticketId;

        // save recent viewed
        $this->recentTicketRepository->saveRecent($ticketSummary);
    }

    #[PostMount]
    public function ensureStatus(): void
    {
        if (false === \is_null($this->selected)) {
            $ticket = $this->ticketRepository
                ->findOneById(Uuid::fromRfc4122($this->selected));

            $this->status = $ticket->getStatus()->value;
        }
    }
}
