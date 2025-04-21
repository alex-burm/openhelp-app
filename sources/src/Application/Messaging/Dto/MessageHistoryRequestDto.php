<?php

namespace App\Application\Messaging\Dto;

readonly class MessageHistoryRequestDto
{
    public function __construct(
        public string $channel,
        public ?int $userId = null,
    ) {
    }
}
