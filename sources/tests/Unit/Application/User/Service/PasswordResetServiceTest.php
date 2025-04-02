<?php

declare(strict_types=1);

namespace App\Tests\Unit\Application\User\Service;

use App\Application\User\Dto\PasswordChangeRequestDto;
use App\Application\User\Dto\PasswordResetRequestDto;
use App\Application\User\Dto\PasswordResetTokenDto;
use App\Application\User\Service\PasswordResetService;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\PasswordChangeRequestedEvent;
use App\Domain\User\Event\PasswordResetRequestedEvent;
use App\Domain\User\Repository\PasswordResetTokenRepository;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\User\ValueObject\ResetPasswordToken;
use DateInterval;
use DateTimeImmutable;
use PHPUnit\Framework\TestCase;

final class PasswordResetServiceTest extends TestCase
{
    private MailHandlerInterface $mailHandlerStub;
    private UserRepositoryInterface $userRepositoryStub;
    private PasswordResetTokenRepository $tokenRepositoryStub;
    private PasswordHasher $passwordHasherStub;
    private PasswordResetService $sut;

    public function setUp(): void
    {
        $this->mailHandlerStub = $this->createStub(MailHandlerInterface::class);
        $this->userRepositoryStub = $this->createStub(UserRepositoryInterface::class);
        $this->passwordHasherStub = $this->createStub(PasswordHasher::class);
        $this->tokenRepositoryStub = $this->createStub(PasswordResetTokenRepository::class);
        $this->sut = new PasswordResetService(
            userRepository: $this->userRepositoryStub,
            tokenRepository: $this->tokenRepositoryStub,
            passwordHasher: $this->passwordHasherStub,
            mailHandler: $this->mailHandlerStub,
        );
    }

    public function testForgotPassword(): void
    {
        $this->userRepositoryStub->method('findOneByEmail')->willReturn(
            new User(
                id: 1,
                login: 'test',
                password: 'test',
                email: 'test@test.com',
            )
        );

        $result = $this->sut->forgotPassword(new PasswordResetRequestDto(email: 'test@test.com', signature: ''));

        self::assertInstanceOf(expected: PasswordResetRequestedEvent::class, actual: $result);
    }

    public function testForgotPasswordNonexistentUser(): void
    {
        $this->userRepositoryStub->method('findOneByEmail')->willReturn(null);

        $result = $this->sut->forgotPassword(new PasswordResetRequestDto(email: '', signature: ''));

        self::assertNull($result);
    }

    public function testChangePassword(): void
    {
        $this->userRepositoryStub->method('findOneByEmail')->willReturn(
            new User(
                id: 1,
                login: 'test',
                password: 'test',
                email: 'test@test.com',
            )
        );

        $result = $this->sut->changePassword(new PasswordChangeRequestDto(email: 'test@test.com', password: 'test'));

        self::assertInstanceOf(expected: PasswordChangeRequestedEvent::class, actual: $result);
    }

    public function testValidateNonexistentToken(): void
    {
        $this->tokenRepositoryStub->method('findTokenByEmail')->willReturn(null);

        $result = $this->sut->validateToken(new PasswordResetTokenDto(email: '', token: ''));

        self::assertFalse($result);
    }

    public function testValidateExpiredToken(): void
    {
        $this->tokenRepositoryStub->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(
                value: 'qwerty1234',
                expiresAt: (new DateTimeImmutable())->sub(new DateInterval('PT1H'))
            )
        );
        
        $result = $this->sut->validateToken(new PasswordResetTokenDto(email: 'user@example.com', token: 'qwerty'));

        self::assertFalse($result);
    }

    public function testValidateCorrectToken(): void
    {
        $this->tokenRepositoryStub->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(
                value: 'qwerty1234',
                expiresAt: (new DateTimeImmutable())->add(new DateInterval('P1D'))
            )
        );
        $result = $this->sut->validateToken(new PasswordResetTokenDto(email: 'user@example.com', token: 'qwerty1234'));

        self::assertTrue($result);
    }

    public function testValidateMismatchToken(): void
    {
        $this->tokenRepositoryStub->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(
                value: 'qwerty1234',
                expiresAt: (new DateTimeImmutable())->add(new DateInterval('P1D'))
            )
        );

        $result = $this->sut->validateToken(new PasswordResetTokenDto(email: 'user@example.com', token: 'asdf'));

        self::assertFalse($result);
    }
}