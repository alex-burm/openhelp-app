<?php

namespace App\Domain\User\Event;

use App\Domain\User\Entity\User;

readonly class UserRegisteredEvent
{
    public function __construct(protected User $user)
    {
    }

    public function getUser(): User
    {
        return $this->user;
    }
}
