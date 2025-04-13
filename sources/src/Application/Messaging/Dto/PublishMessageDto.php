<?php

namespace App\Application\Messaging\Dto;

use App\Domain\Messaging\ValueObject\MessageType;

readonly class PublishMessageDto
{
    public function __construct(
        public string $id,
        public string $text,
        public string $channel,
        public string $type = MessageType::TYPE_MESSAGE->value,
        public string $datetime,
    ) {}
}
