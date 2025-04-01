<?php

namespace App\Application\User\Service;

use App\Application\User\Dto\UserRegisterDto;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\Mail\Outgoing\Type\RegisterUserMailType;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\UserRegisteredEvent;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;

class UserRegisterService
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

        $this->mailHandler->handle(RegisterUserMailType::create($user));

        return $this->eventDispatcher->dispatch(new UserRegisteredEvent($user));
    }
}
