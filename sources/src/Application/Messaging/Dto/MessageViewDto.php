<?php

namespace App\Application\Messaging\Dto;

readonly class MessageViewDto
{
    public function __construct(
        public string $serverId,
        public ?string $clientId = null,
        public string $text,
        public string $type,
        public string $direction,
        public \DateTimeImmutable $datetime,
        public ?string $name = null,
    ) {}
}
