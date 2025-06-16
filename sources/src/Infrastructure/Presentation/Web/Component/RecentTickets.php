<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\Service\RecentTicketFilterService;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class RecentTickets
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public string $sortBy = 'updatedAt';

    #[LiveProp(writable: true)]
    public string $sortDirection = 'ASC';

    protected ?TicketSummaryCollectionDto $cached = null;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
        protected RecentTicketFilterService $recentTicketFilterService,
    ) {
    }

    #[LiveAction]
    public function setSortBy(
        #[LiveArg] string $value,
    ): void {
        if ($this->sortBy !== $value) {
            $this->sortBy = $value;
            $this->sortDirection = 'ASC';
        } else {
            $this->sortDirection = $this->sortDirection === 'ASC' ? 'DESC' : 'ASC';
        }
    }

    #[LiveAction]
    public function resetAgent(
        #[LiveArg] Uuid $ticketId,
    ): void {
        $ticket = $this->ticketRepository->findOneById($ticketId);
        $ticket->setAssigneeId(null);

        $this->ticketRepository->save($ticket);

        $ticketSummary = $this->ticketRepository->getSummary($ticket->getId());
        $this->recentTicketRepository->saveRecent($ticketSummary);
    }

    #[LiveAction]
    public function removeItem(
        #[LiveArg] Uuid $ticketId,
    ): void {
        $this->recentTicketRepository->deleteRecent($ticketId);
    }

    public function getList(): TicketSummaryCollectionDto
    {
        return $this->cached ??= $this->recentTicketFilterService->getList($this->sortBy, $this->sortDirection);
    }
}
