<?php

namespace App\Domain\Mail\Outgoing\Service;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;

interface MailHandlerInterface
{
    public function handle(OutgoingMessageInterface $message): void;
}
