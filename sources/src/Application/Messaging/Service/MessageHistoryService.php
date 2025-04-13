<?php

namespace App\Application\Messaging\Service;

use App\Application\Messaging\Dto\MessageViewCollectionDto;
use App\Application\Messaging\Dto\MessageHistoryRequestDto;
use App\Application\Messaging\Dto\MessageViewDto;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;
use App\Domain\Messaging\ValueObject\MessageDirection;
use Symfony\Component\Uid\Uuid;

class MessageHistoryService
{
    public function __construct(
        protected MessageRepositoryInterface $repository
    ) {}

    public function getHistory(MessageHistoryRequestDto $historyRequestDto): MessageViewCollectionDto
    {
        return $this->repository->findByTicketId(
            Uuid::fromRfc4122($historyRequestDto->channel),
            $historyRequestDto->userId,
        );
    }
}
