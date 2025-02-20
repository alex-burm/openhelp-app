<?php


namespace App\Domain\User\ValueObject;

use DateTimeImmutable;

class ResetPasswordToken
{
    public function __construct(
        protected string $value,
        protected \DateTimeImmutable $expiresAt,
    ) {
    }

    public static function generate(): self
    {
        return new self(uniqid(), new \DateTimeImmutable('+1 hour'));
    }

    public function isExpired(): bool
    {
        return $this->expiresAt < new \DateTimeImmutable();
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function getExpiresAt(): DateTimeImmutable
    {
        return $this->expiresAt;
    }
}
