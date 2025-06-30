<?php

namespace App\Application\Ticket\ReadModel;

use App\Application\Ticket\Dto\TicketSummaryCollectionDto;
use Symfony\Component\Uid\Uuid;

interface RecentTicketViewRepository
{
    public function findRecent(): TicketSummaryCollectionDto;

    public function saveRecent(TicketSummaryView $view): void;

    public function deleteRecent(Uuid $ticketId): void;
}
