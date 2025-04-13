<?php

namespace App\Application\Messaging\Service;

use App\Application\Messaging\Dto\PublishMessageDto;
use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;
use App\Domain\Messaging\ValueObject\MessageType;
use Symfony\Component\Uid\Uuid;

class PublishMessageService
{
    public function __construct(
        protected MessagePublisherInterface $publisher,
        protected MessageRepositoryInterface $repository
    ) {}

    public function publish(PublishMessageDto $messageDto): void
    {
        $message = new Message(
            clientId: $messageDto->id,
            ticketId: Uuid::fromRfc4122($messageDto->channel),
            text: $messageDto->text,
            type:  MessageType::from($messageDto->type),
            sentAt: (new \DateTimeImmutable($messageDto->datetime))
                ->setTimezone(new \DateTimeZone('UTC')),
        );
        $this->repository->save($message);

        $this->publisher->publish($message);
    }
}
