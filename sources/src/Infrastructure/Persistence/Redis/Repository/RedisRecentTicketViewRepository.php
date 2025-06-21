<?php

namespace App\Infrastructure\Persistence\Redis\Repository;


use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use App\Application\Ticket\ReadModel\TicketSummaryView;
use App\Application\Ticket\ReadModel\RecentTicketViewRepository;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\Uid\Uuid;

class RedisRecentTicketViewRepository implements RecentTicketViewRepository
{
    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected \Redis $redis
    ) {
    }

    public function getCurrentWorkspaceId(): int
    {
        return $this->workspaceContext->getCurrentWorkspace()->getId();
    }

    public function findRecent(): TicketSummaryCollectionDto
    {
        $ids = $this->redis->zRevRange('ticket:recent:' . $this->getCurrentWorkspaceId(), 0, 10);

        $pipe = $this->redis->pipeline();
        foreach ($ids as $id) {
            $pipe->hGetAll('ticket:summary:' . $id);
        }

        $raw = \array_filter($pipe->exec());

        return new TicketSummaryCollectionDto(\array_map(fn ($data) => $this->hydrate($data), $raw));
    }

    public function saveRecent(TicketSummaryView $view): void
    {
        $key = 'ticket:summary:' . $view->ticketId;

        $this->redis->hMSet($key, [
            'ticketId' => $view->ticketId,
            'ticketTitle' => $view->ticketTitle,
            'ticketChannel' => $view->ticketChannel,
            'ticketStatus' => $view->ticketStatus,
            'ticketPriority' => $view->ticketPriority,

            'assigneeId' => $view->assigneeId,
            'assigneeName' => $view->assigneeName,
            'customerId' => $view->customerId,
            'customerName' => $view->customerName,
            'unreadCount' => $view->unreadCount,
            'updatedAt' => $view->updatedAt->format('c'),
        ]);

        $this->redis->zAdd('ticket:recent:' . $this->getCurrentWorkspaceId(), $view->updatedAt->getTimestamp(), $view->ticketId);
    }

    public function deleteRecent(Uuid $ticketId): void
    {
        $ticketId = $ticketId->toRfc4122();
        $workspaceKey = 'ticket:recent:' . $this->getCurrentWorkspaceId();

        $this->redis->multi()
            ->del('ticket:summary:' . $ticketId)
            ->zRem($workspaceKey, $ticketId)
            ->exec();
    }

    protected function hydrate(array $data): TicketSummaryView
    {
        return new TicketSummaryView(
            ...\array_merge(
                $data,
                ['updatedAt' => new \DateTimeImmutable($data['updatedAt'])]
            )
        );
    }

}
