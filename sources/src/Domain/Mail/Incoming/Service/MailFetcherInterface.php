<?php

namespace App\Domain\Mail\Incoming\Service;

use App\Domain\Mail\Incoming\ValueObject\FetchedEmailMessage;

interface MailFetcherInterface
{
    public function setHost(string $host): static;

    public function setPort(int $port): static;

    public function setUsername(string $username): static;

    public function setPassword(string $password): static;

    public function fetch(): ?FetchedEmailMessage;
}
