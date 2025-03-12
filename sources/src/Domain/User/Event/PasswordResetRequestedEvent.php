<?php


namespace App\Domain\User\Event;

use App\Domain\User\ValueObject\ResetPasswordToken;

readonly class PasswordResetRequestedEvent
{

    public function __construct(
        public string $email,
        public ResetPasswordToken $token,
    ) {
    }
}
