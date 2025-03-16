<?php

namespace App\Domain\User\Event;

use App\Domain\Common\Event\EventInterface;
use App\Domain\User\ValueObject\ResetPasswordToken;

readonly class PasswordResetRequestedEvent implements EventInterface
{
    public function __construct(
        public string $email,
        public ResetPasswordToken $token,
    ) {
    }
}
