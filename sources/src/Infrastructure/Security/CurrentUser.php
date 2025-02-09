<?php

namespace App\Infrastructure\Security;

use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Domain\User\Entity\User;

class CurrentUser implements UserInterface, PasswordAuthenticatedUserInterface
{
    public function __construct(
        protected User $user
    ) {
    }

    public function getUserIdentifier(): string
    {
        return $this->user->getLogin();
    }

    public function getRoles(): array
    {
        return $this->user->getRoles();
    }

    public function getPassword(): string
    {
        return $this->user->getPassword();
    }

    public function eraseCredentials(): void
    {
    }

    public function getDomainUser(): User
    {
        return $this->user;
    }

    public function __call(string $name, array $arguments)
    {
        return $this->user->$name(...$arguments);
    }
}
