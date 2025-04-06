<?php

namespace App\Domain\Messaging\Repository;

use App\Domain\Messaging\Entity\Message;

interface MessageRepositoryInterface
{
    public function save(Message $message): void;
}
