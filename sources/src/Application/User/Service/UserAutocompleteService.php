<?php

namespace App\Application\User\Service;

use App\Domain\User\Repository\UserRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;

class UserAutocompleteService
{
    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected UserRepositoryInterface $userRepository,
    ) {
    }

    public function __invoke(string $query)
    {

    }
}
