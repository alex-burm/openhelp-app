<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Application\Ticket\Service\RecentTicketFilterService;
use App\Application\Ticket\Service\TicketChangeStatusService;
use App\Application\Ticket\Service\TicketSummaryService;
use App\Domain\Ticket\ValueObject\TicketStatus as TicketStatusVO;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class TicketStatus
{
    use DefaultActionTrait;

    public TicketSummaryView $item;

    #[LiveProp(writable: true)]
    public bool $isSimpleView = false;

    public function __construct(
        protected RecentTicketFilterService $recentTicketFilterService,
        protected TicketChangeStatusService $ticketChangeStatusService,
        protected TicketSummaryService      $ticketSummaryService,
    ) {
    }

    #[LiveAction]
    public function setStatus(
        #[LiveArg] Uuid $ticketId,
        #[LiveArg] TicketStatusVO $status
    ): void {
        $this->ticketChangeStatusService->process($ticketId, $status);

        // update summary
        $this->item = $this->ticketSummaryService->getSummary($ticketId);

        // update recent
        $this->recentTicketFilterService->save($this->item);
    }
}
