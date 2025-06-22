<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Application\Ticket\Service\RecentTicketFilterService;
use App\Application\Ticket\Service\TicketAssignAgentService;
use App\Application\Ticket\Service\TicketSummaryService;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Domain\User\Repository\UserRepositoryInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class RecentTicketAssignee
{
    use DefaultActionTrait;

    public TicketSummaryView $item;

    public bool $isSimpleView = false;

    public function __construct(
        protected TicketAssignAgentService $ticketAssignAgentService,
        protected RecentTicketFilterService $recentTicketFilterService,
        protected TicketSummaryService $ticketSummaryService,
    ) {
    }

    #[LiveAction]
    public function setUser(
        #[LiveArg] Uuid $ticketId,
        #[LiveArg] int $userId,
    ): void {
        $this->ticketAssignAgentService->assignAgent($ticketId, $userId);

        // refresh summary for view
        $this->item = $this->ticketSummaryService->getSummary($ticketId);

        // update recent
        $this->recentTicketFilterService->save($this->item);
    }
}
