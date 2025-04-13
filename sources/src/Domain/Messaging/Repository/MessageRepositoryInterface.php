<?php

namespace App\Domain\Messaging\Repository;

use App\Application\Messaging\Dto\MessageViewCollectionDto;
use App\Domain\Messaging\Collection\MessageCollection;
use App\Domain\Messaging\Entity\Message;
use Symfony\Component\Uid\Uuid;

interface MessageRepositoryInterface
{
    public function save(Message $message): void;

    public function findByTicketId(Uuid $ticketId, ?int $currentUserId = null): MessageViewCollectionDto;
}
