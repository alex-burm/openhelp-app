<?php

namespace App\Infrastructure\Security;

use App\Domain\User\Entity\User;
use App\Domain\User\Service\CurrentUserProviderInterface;
use Symfony\Bundle\SecurityBundle\Security;

class CurrentUserProvider implements CurrentUserProviderInterface
{
    public function __construct(
        protected Security $security,
    ) {
    }

    public function getCurrentUser(): ?User
    {
        $currentUser = $this->security->getUser();

        if (false === ($currentUser instanceof CurrentUser)) {
            return null;
        }

        return $currentUser->getDomainUser();
    }
}
