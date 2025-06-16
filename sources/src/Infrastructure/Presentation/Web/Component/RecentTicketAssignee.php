<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;
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

    public function __construct(
        protected UserRepositoryInterface $userRepository,
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
    ) {
    }

    #[LiveAction]
    public function setUser(
        #[LiveArg] Uuid $ticketId,
        #[LiveArg] int $userId,
    ): void {
        $user = $this->userRepository->findOneById($userId);
        $ticket = $this->ticketRepository->findOneById($ticketId);
        $ticket->setAssigneeId($user->getId());

        $this->ticketRepository->save($ticket);

        $ticketSummary = $this->ticketRepository->getSummary($ticket->getId());
        $this->recentTicketRepository->saveRecent($ticketSummary);

        $this->item = $ticketSummary;
    }
}
