<?php

namespace App\Application\Messaging\Service;

use App\Domain\Messaging\Entity\Message;

interface MessagePublisherInterface
{
    public function publish(Message $message): void;
}
