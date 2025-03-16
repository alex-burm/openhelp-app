<?php

namespace App\Domain\Mail\Incoming\ValueObject;

readonly class FetchedEmailMessage
{
    const DEFAULT_SUBJECT = 'Untitled subject';

    public function __construct(
        public string $name,
        public string $address,
        public string $subject,
        public string $body,
    ) {
    }
}
