<?php

namespace App\Application\Ticket\Service;

use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\ValueObject\Counter\TicketChannelsCount;
use App\Domain\Ticket\ValueObject\Counter\TicketPrioritiesCount;
use App\Domain\Ticket\ValueObject\Counter\TicketStatusesCount;
use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;

class TicketStatsService
{
    protected ?TicketStatusesCount $ticketStatuses = null;

    protected ?TicketPrioritiesCount $ticketPriorities = null;

    protected ?TicketChannelsCount $ticketChannels = null;

    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
    ) {
    }

    public function getCountByStatus(TicketStatus $status): int
    {
        if (\is_null($this->ticketStatuses)) {
            $this->ticketStatuses = $this->ticketRepository->countPerStatus();
        }

        return $this->ticketStatuses->getByStatus($status);
    }

    public function getCountByPriority(TicketPriority $priority): int
    {
        if (\is_null($this->ticketPriorities)) {
            $this->ticketPriorities = $this->ticketRepository->countPerPriority();
        }

        return $this->ticketPriorities->getByPriority($priority);
    }

    public function getCountByChannel(TicketChannel $channel): int
    {
        if (\is_null($this->ticketChannels)) {
            $this->ticketChannels = $this->ticketRepository->countPerChannel();
        }

        return $this->ticketChannels->getByChannel($channel);
    }
}
