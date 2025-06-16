<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\Service\RecentTicketFilterService;
use App\Application\Ticket\Service\TicketAssignAgentService;
use App\Application\Ticket\Service\TicketSummaryService;
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
        protected TicketAssignAgentService $ticketAssignAgentService,
        protected RecentTicketFilterService $recentTicketFilterService,
        protected TicketSummaryService $ticketSummaryService,
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
        $this->ticketAssignAgentService->resetAgent($ticketId);

        // update recent
        $summary = $this->ticketSummaryService->getSummary($ticketId);
        $this->recentTicketFilterService->save($summary);
    }

    #[LiveAction]
    public function removeItem(
        #[LiveArg] Uuid $ticketId,
    ): void {
        $this->recentTicketFilterService->delete($ticketId);
    }

    public function getList(): TicketSummaryCollectionDto
    {
        return $this->cached ??= $this->recentTicketFilterService->getList($this->sortBy, $this->sortDirection);
    }
}
