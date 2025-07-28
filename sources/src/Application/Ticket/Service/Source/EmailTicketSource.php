<?php

namespace App\Application\Ticket\Service\Source;

use App\Application\Ticket\Dto\TicketDraftDto;
use App\Domain\Mail\Incoming\Service\MailFetcherInterface;
use App\Domain\Ticket\Service\TicketSourceInterface;
use App\Domain\Ticket\ValueObject\TicketChannel;

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
            ticketChannel: TicketChannel::EMAIL,
            userName: $email->name,
            userEmail: $email->address,
        );
    }
}
