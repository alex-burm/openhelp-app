<?php

namespace App\Domain\User\Service;

use App\Domain\User\Entity\User;

interface CurrentUserProviderInterface
{
    public function getCurrentUser(): ?User;
}
