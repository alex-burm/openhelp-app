<?php

declare(strict_types=1);

namespace App\Tests\Unit\Application\User\Service;

use App\Application\User\Dto\UserWithWorkspaceRegisterDto;
use App\Application\User\Service\RegisterWithWorkspaceService;
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
use ReflectionClass;

final class RegisterWithWorkspaceServiceTest extends TestCase
{
    private WorkspaceContext $workspaceContext;
    private UserRepositoryInterface $userRepository;
    private WorkspaceRepositoryInterface $workspaceRepository;
    private PasswordHasher $passwordHasher;
    private MailHandlerInterface $mailHandler;
    private EventDispatcherInterface $eventDispatcher;
    private RegisterWithWorkspaceService $service;

    protected function setUp(): void
    {
        $this->workspaceContext = $this->createMock(WorkspaceContext::class);
        $this->userRepository = $this->createMock(UserRepositoryInterface::class);
        $this->workspaceRepository = $this->createMock(WorkspaceRepositoryInterface::class);
        $this->passwordHasher = $this->createMock(PasswordHasher::class);
        $this->mailHandler = $this->createMock(MailHandlerInterface::class);
        $this->eventDispatcher = $this->createMock(EventDispatcherInterface::class);

        $this->service = new RegisterWithWorkspaceService(
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
        $dto = new UserWithWorkspaceRegisterDto(
            'Test Workspace',
            'password123',
            'test-user',
            'test@example.com'
        );

        $this->passwordHasher->expects($this->once())
            ->method('hash')
            ->with('password123')
            ->willReturn('hashed-password');

        $this->workspaceRepository->expects($this->exactly(2))
            ->method('save');

        $this->userRepository->expects($this->once())
            ->method('save')
            ->with($this->callback(function (User $user) {
                // Simulate the user getting an ID after being saved
                $reflection = new ReflectionClass($user);
                $property = $reflection->getProperty('id');
                $property->setAccessible(true);
                $property->setValue($user, 123);
                return true;
            }));

        $this->workspaceContext->expects($this->once())
            ->method('setCurrentWorkspace');

        $this->mailHandler->expects($this->once())
            ->method('handle');

        $this->eventDispatcher->expects($this->once())
            ->method('dispatch')
            ->with($this->isInstanceOf(UserRegisteredEvent::class))
            ->will($this->returnArgument(0));

        $event = ($this->service)($dto);

        $this->assertInstanceOf(UserRegisteredEvent::class, $event);
        $this->assertSame($dto->email, $event->user->getEmail());
        $this->assertSame($dto->workspace, $event->workspace->getName());
        $this->assertSame(123, $event->workspace->getOwnerId());
    }
}
