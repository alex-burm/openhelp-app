<?php

namespace App\Domain\User\Event;

use App\Domain\Common\Event\EventInterface;
use App\Domain\User\Entity\User;
use App\Domain\Workspace\Entity\Workspace;

readonly class UserRegisteredEvent implements EventInterface
{
    public function __construct(
        public User $user,
        public Workspace $workspace,
    ) {
    }
}
