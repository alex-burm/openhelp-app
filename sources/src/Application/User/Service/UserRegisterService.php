<?php

namespace App\Application\User\Service;

use App\Application\User\Dto\UserRegisterDto;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\UserRegisteredEvent;
use App\Domain\User\Repository\UserRepository;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepository;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineWorkspaceMapper;
use App\Infrastructure\Service\WorkspaceContext;

class UserRegisterService
{
    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected UserRepository $userRepository,
        protected WorkspaceRepository $workspaceRepository,
        protected PasswordHasher $passwordHasher,
    ) {
    }

    public function __invoke(UserRegisterDto $data): UserRegisteredEvent
    {
        $passwordHash = $this->passwordHasher->hash($data->password);

        $user = new User(
            login: $data->login,
            password: $passwordHash,
            name: $data->name,
            email: $data->email,
        );

        $workspace = new Workspace(name: $data->name);

        $this->workspaceRepository->save($workspace);

        // Set current workspace
        $this->workspaceContext->setCurrentWorkspace($workspace);

        $this->userRepository->save($user);

        // Set workspace owner
        $workspace->setOwnerId($user->getId());
        $this->workspaceRepository->save($workspace);

        return new UserRegisteredEvent($user);
    }
}
