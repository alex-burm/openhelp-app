<?php

namespace App\Application\Messaging\Service;

use App\Application\Messaging\Dto\PublishMessageDto;
use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;

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
            ticketId: $messageDto->ticketId,
            text: $messageDto->text,
            type:  $messageDto->type,
            sentAt: $messageDto->sentAt,
        );
        $this->repository->save($message);

        $this->publisher->publish($message);
    }
}
