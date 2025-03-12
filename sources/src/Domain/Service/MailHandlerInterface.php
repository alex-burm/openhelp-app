<?php

namespace App\Domain\Service;

use App\Domain\Mail\MailMessageInterface;

interface MailHandlerInterface
{
    public function handle(MailMessageInterface $notification): void;
}
