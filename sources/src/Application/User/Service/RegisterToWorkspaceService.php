<?php

namespace App\Application\User\Service;

use App\Application\User\Dto\UserToWorkspaceRegisterDto;
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

class RegisterToWorkspaceService
{
    public function __construct(
        protected WorkspaceContext             $workspaceContext,
        protected UserRepositoryInterface      $userRepository,
        protected WorkspaceRepositoryInterface $workspaceRepository,
        protected PasswordHasher               $passwordHasher,
        protected MailHandlerInterface         $mailHandler,
        protected EventDispatcherInterface     $eventDispatcher,
    ) {
    }

    public function __invoke(UserToWorkspaceRegisterDto $data): UserRegisteredEvent
    {
        $passwordHash = $this->passwordHasher->hash($data->password);

        $user = new User(
            password: $passwordHash,
            name: $data->name,
            email: $data->email,
            roles: new RoleCollection([Role::MANAGER])
        );

        $workspace = $this->workspaceContext->getCurrentWorkspace();

        $this->userRepository->save($user);

        $this->mailHandler->handle(WelcomeMailType::create($user));

        return $this->eventDispatcher->dispatch(new UserRegisteredEvent($user, $workspace));
    }
}
