<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Application\Ticket\Service\TicketChangeTitleService;
use App\Application\Ticket\Service\TicketSummaryService;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Psr\Log\LoggerInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveArg;
use Symfony\UX\LiveComponent\Attribute\LiveListener;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\Attribute\PostHydrate;
use Symfony\UX\LiveComponent\Attribute\PreReRender;
use Symfony\UX\LiveComponent\DefaultActionTrait;
use Symfony\UX\TwigComponent\Attribute\ExposeInTemplate;
use Symfony\UX\TwigComponent\Attribute\PostMount;
use Symfony\UX\TwigComponent\Attribute\PreMount;

#[AsLiveComponent]
class TicketHeader
{
    use DefaultActionTrait;

    #[LiveProp(writable: true)]
    public ?string $ticketId = null;

    #[LiveProp(writable: true)]
    public string $ticketTitle = '';

    public ?TicketSummaryView $item = null;

    public function __construct(
        protected LoggerInterface $logger,
        protected TicketSummaryService $summaryService,
        protected TicketRepositoryInterface $ticketRepository,
        protected TicketChangeTitleService $ticketChangeTitleService,
    ) {
    }

    #[PreReRender]
    public  function preReRender(): void
    {
        $this->ensureItem();
    }

    #[LiveAction]
    public function save(
        #[LiveArg] string $ticketTitle
    ): void {
        $this->ticketChangeTitleService
            ->process(Uuid::fromRfc4122($this->ticketId), $ticketTitle);
    }

    #[PostMount]
    #[PostHydrate]
    public function ensureItem(): void
    {
        if (\is_null($this->ticketId)) {
            return;
        }
        $this->item = $this->summaryService->getSummary(Uuid::fromRfc4122($this->ticketId));
        $this->ticketTitle = $this->item->ticketTitle;
    }
}
