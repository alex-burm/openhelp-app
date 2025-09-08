<?php

namespace App\Application\User\Service;

use App\Application\Category\Service\CreateDefaultCategoriesService;
use App\Application\User\Dto\UserWithWorkspaceRegisterDto;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\Mail\Outgoing\Type\WelcomeMailType;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\UserRegisteredEvent;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\User\ValueObject\Role;
use App\Domain\User\ValueObject\RoleCollection;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;

class UserRegisterService
{
    public function __construct(
        protected WorkspaceContext               $workspaceContext,
        protected UserRepositoryInterface        $userRepository,
        protected WorkspaceRepositoryInterface   $workspaceRepository,
        protected PasswordHasher                 $passwordHasher,
        protected MailHandlerInterface           $mailHandler,
        protected EventDispatcherInterface       $eventDispatcher,
        protected CreateDefaultCategoriesService $defaultCategoriesService,
    ) {
    }

    public function __invoke(UserWithWorkspaceRegisterDto $data): UserRegisteredEvent
    {
        $passwordHash = $this->passwordHasher->hash($data->password);

        $user = new User(
            password: $passwordHash,
            name: $data->name,
            email: $data->email,
            roles: new RoleCollection([Role::MANAGER])
        );

        $workspace = new Workspace(name: $data->workspace);

        $this->workspaceRepository->save($workspace);

        // Set the current workspace
        $this->workspaceContext->setCurrentWorkspace($workspace);

        $this->userRepository->save($user);

        // Set workspace owner
        $workspace->setOwnerId($user->getId());
        $this->workspaceRepository->save($workspace);

        $defaultCategoriesService();

        $this->mailHandler->handle(WelcomeMailType::create($user));

        return $this->eventDispatcher->dispatch(new UserRegisteredEvent($user, $workspace));
    }

}
