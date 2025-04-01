<?php

namespace App\Application\Ticket\Service;

use App\Application\Ticket\Dto\TicketDraftDto;
use App\Domain\Mail\Incoming\Service\MailFetcherInterface;
use App\Domain\Ticket\Service\TicketSourceInterface;

class EmailTicketSource implements TicketSourceInterface
{
    public function __construct(
        protected MailFetcherInterface $mailFetcher,
    ) {
    }

    public function getNextTicketDraft(): ?TicketDraftDto
    {
        $email = $this->mailFetcher->fetch();
        if (\is_null($email)) {
            return null;
        }

        return new TicketDraftDto(
            ticketTitle: $email->subject,
            ticketMessage: $email->body,
            userName: $email->name,
            userEmail: $email->address,
        );
    }
}
