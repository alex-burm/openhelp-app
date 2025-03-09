<?php

namespace App\Domain\Ticket\ValueObject\Counter;

use App\Domain\Ticket\ValueObject\TicketChannel;

readonly class TicketChannelsCount
{
    public function __construct(
        public int $email = 0,
        public int $chat = 0,
        public int $form = 0,
    ) {
    }

    public function getByChannel(TicketChannel $channel): int
    {
        return match ($channel) {
            TicketChannel::EMAIL => $this->email,
            TicketChannel::CHAT => $this->chat,
            TicketChannel::FORM => $this->form,
        };
    }
}
