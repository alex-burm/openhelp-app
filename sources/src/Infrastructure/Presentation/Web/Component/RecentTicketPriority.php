<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Application\Ticket\Service\RecentTicketFilterService;
use App\Application\Ticket\Service\TicketChangePriorityService;
use App\Application\Ticket\Service\TicketSummaryService;
use App\Domain\Ticket\ValueObject\TicketPriority;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class RecentTicketPriority
{
    use DefaultActionTrait;

    public TicketSummaryView $item;

    public bool $isSimpleView = false;

    public function __construct(
        protected RecentTicketFilterService $recentTicketFilterService,
        protected TicketChangePriorityService $ticketChangePriorityService,
        protected TicketSummaryService $ticketSummaryService,
    ) {
    }

    #[LiveAction]
    public function setPriority(
        #[LiveArg] Uuid $ticketId,
        #[LiveArg] TicketPriority $priority
    ): void {
        $this->ticketChangePriorityService->process($ticketId, $priority);

        // refresh summary for view
        $this->item = $this->ticketSummaryService->getSummary($ticketId);

        // update recent
        $this->recentTicketFilterService->save($this->item);
    }
}
