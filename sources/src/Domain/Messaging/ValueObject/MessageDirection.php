<?php

namespace App\Domain\Messaging\ValueObject;

enum MessageDirection: string
{
    case TYPE_INCOMING = 'incoming';
    case TYPE_OUTGOING = 'outgoing';

    public static function fromIsAuthor(bool $isAuthor): self
    {
        return $isAuthor ? self::TYPE_OUTGOING : self::TYPE_INCOMING;
    }
}
