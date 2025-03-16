<?php

namespace App\Domain\Ticket\Service;

use App\Application\Ticket\Dto\TicketDraftDto;

interface TicketSourceInterface
{
    public function getNextTicketDraft(): ?TicketDraftDto;
}
