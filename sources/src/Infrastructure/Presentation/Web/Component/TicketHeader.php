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
class TicketHeader
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public string $name = 'Hello';

//    #[LiveProp(writable: true)]
//    public int $status = TicketStatus::NEW->value;
//
//    #[LiveProp(writable: true)]
//    public string $search = '';

//    #[LiveProp(writable: true)]
//    public ?string $selected = null;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected RecentTicketViewRepository $recentTicketRepository,
    ) {
    }
}
