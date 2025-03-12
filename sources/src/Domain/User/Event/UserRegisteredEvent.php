<?php

namespace App\Domain\User\Event;

use App\Domain\User\Entity\User;

readonly class UserRegisteredEvent
{
    public function __construct(
        public User $user,
    ) {
    }
}
