<?php

namespace App\Infrastructure\Security;

use Symfony\Component\DependencyInjection\Attribute\Autoconfigure;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\Exception\UserNotFoundException;
use App\Domain\User\Repository\UserRepository;

class UserProvider implements UserProviderInterface
{
    public function __construct(
        protected UserRepository $userRepository,
    ) {
    }

    public function loadUserByIdentifier(string $identifier): UserInterface
    {
        $user = $this->userRepository->findOneByLogin($identifier);

        if (\is_null($user)) {
            throw new UserNotFoundException('User not found');
        }

        return new CurrentUser($user);
    }

    public function refreshUser(UserInterface $user): UserInterface
    {
        if (false === ($user instanceof CurrentUser)) {
            throw new \Exception('Invalid user class');
        }

        return $this->loadUserByIdentifier($user->getUserIdentifier());
    }

    public function supportsClass(string $class): bool
    {
        return $class === CurrentUser::class;
    }
}
