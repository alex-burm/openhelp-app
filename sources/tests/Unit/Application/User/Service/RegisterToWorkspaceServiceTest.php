<?php

declare(strict_types=1);

namespace App\Tests\Unit\Application\User\Service;

use App\Application\User\Dto\UserToWorkspaceRegisterDto;
use App\Application\User\Service\RegisterToWorkspaceService;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\UserRegisteredEvent;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;
use PHPUnit\Framework\TestCase;

final class RegisterToWorkspaceServiceTest extends TestCase
{
    private WorkspaceContext $workspaceContext;
    private UserRepositoryInterface $userRepository;
    private WorkspaceRepositoryInterface $workspaceRepository;
    private PasswordHasher $passwordHasher;
    private MailHandlerInterface $mailHandler;
    private EventDispatcherInterface $eventDispatcher;
    private RegisterToWorkspaceService $service;

    protected function setUp(): void
    {
        $this->workspaceContext = $this->createMock(WorkspaceContext::class);
        $this->userRepository = $this->createMock(UserRepositoryInterface::class);
        $this->workspaceRepository = $this->createMock(WorkspaceRepositoryInterface::class);
        $this->passwordHasher = $this->createMock(PasswordHasher::class);
        $this->mailHandler = $this->createMock(MailHandlerInterface::class);
        $this->eventDispatcher = $this->createMock(EventDispatcherInterface::class);

        $this->service = new RegisterToWorkspaceService(
            $this->workspaceContext,
            $this->userRepository,
            $this->workspaceRepository,
            $this->passwordHasher,
            $this->mailHandler,
            $this->eventDispatcher
        );
    }

    public function testInvoke(): void
    {
        $dto = new UserToWorkspaceRegisterDto('password123', 'test-user', 'test@example.com');
        $workspace = new Workspace(id: 1, name: 'Test Workspace');

        $this->passwordHasher->expects($this->once())
            ->method('hash')
            ->with('password123')
            ->willReturn('hashed-password');

        $this->workspaceContext->expects($this->once())
            ->method('getCurrentWorkspace')
            ->willReturn($workspace);

        $this->userRepository->expects($this->once())
            ->method('save')
            ->with($this->callback(function (User $user) use ($dto) {
                return $user->getEmail() === $dto->email &&
                       $user->getName() === $dto->name &&
                       $user->getPassword() === 'hashed-password';
            }));

        $this->mailHandler->expects($this->once())
            ->method('handle');

        $this->eventDispatcher->expects($this->once())
            ->method('dispatch')
            ->with($this->isInstanceOf(UserRegisteredEvent::class))
            ->will($this->returnArgument(0));

        $event = ($this->service)($dto);

        $this->assertInstanceOf(UserRegisteredEvent::class, $event);
        $this->assertSame($dto->email, $event->user->getEmail());
        $this->assertSame($workspace, $event->workspace);
    }
}
