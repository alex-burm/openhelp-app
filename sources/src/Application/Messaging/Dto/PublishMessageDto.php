<?php

namespace App\Application\Messaging\Dto;

readonly class PublishMessageDto
{
    public function __construct(
        public string $clientId,
        public string $datetime,
        public string $channel,
        public string $text,
    ) {}
}
