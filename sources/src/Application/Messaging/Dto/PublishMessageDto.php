<?php

namespace App\Application\Messaging\Dto;

use App\Domain\Messaging\ValueObject\MessageType;
use Symfony\Component\Uid\Uuid;

readonly class PublishMessageDto
{
    public function __construct(
        public string $id,
        public string $text,
        public Uuid $ticketId,
        public MessageType $type,
        public \DateTimeImmutable $sentAt,
    ) {}
}
