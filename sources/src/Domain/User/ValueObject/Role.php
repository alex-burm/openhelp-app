<?php

namespace App\Domain\User\ValueObject;

enum Role: string
{
    case MANAGER = 'manager';
    case CUSTOMER = 'customer';
    case USER = 'user';

    public function isManager(): bool
    {
        return self::MANAGER === $this;
    }

    public function isCustomer(): bool
    {
        return self::CUSTOMER === $this;
    }

    public function isUser(): bool
    {
        return self::USER === $this;
    }
}
