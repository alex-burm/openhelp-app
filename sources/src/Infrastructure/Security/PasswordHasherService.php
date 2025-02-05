<?php

namespace App\Infrastructure\Security;

use App\Domain\User\Service\PasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

class PasswordHasherService implements PasswordHasher
{

    public function __construct(
        protected UserPasswordHasherInterface $passwordHasher
    ) {
    }

    public function hash(string $plainPassword): string
    {
        $dummyUser = new class implements PasswordAuthenticatedUserInterface {
            public function getPassword(): ?string
            {
                return null;
            }
        };

        return $this->passwordHasher->hashPassword($dummyUser, $plainPassword);
    }
}
