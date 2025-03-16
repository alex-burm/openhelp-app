<?php

namespace App\Domain\User\Event;

use App\Domain\Common\Event\EventInterface;
use App\Domain\User\Entity\User;

readonly class PasswordChangeRequestedEvent implements EventInterface
{
    public function __construct(
        public User $user,
    ) {
    }
}
