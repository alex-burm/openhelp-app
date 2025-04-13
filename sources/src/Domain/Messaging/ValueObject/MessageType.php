<?php

namespace App\Domain\Messaging\ValueObject;

enum MessageType: int
{
    case TYPE_MESSAGE = 0;
    case TYPE_SYSTEM  = 1;

    public function label(): string
    {
        return match ($this) {
            self::TYPE_MESSAGE => 'message',
            self::TYPE_SYSTEM  => 'system',
        };
    }

    public static function fromLabel(string $label): ?self
    {
        return match ($label) {
            'message' => self::TYPE_MESSAGE,
            'system'  => self::TYPE_SYSTEM,
            default   => null,
        };
    }
}
