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
use App\Domain\User\ValueObject\ResetPasswordToken;
use DateInterval;
use DateTimeImmutable;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

final class PasswordResetServiceTest extends KernelTestCase
{
    public function testForgotPassword(): void
    {
        $userRepository = $this->createStub(UserRepositoryInterface::class);
        $userRepository->method('findOneByEmail')->willReturn(new User(
            id: 1, login: 'test', password: 'test', email: 'test@test.com',
        ));
        self::getContainer()->set(UserRepositoryInterface::class, $userRepository);
        self::getContainer()->set(MailHandlerInterface::class, $this->createStub(MailHandlerInterface::class));
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->forgotPassword(new PasswordResetRequestDto(email: 'test@test.com',signature: ''));

        self::assertInstanceOf(expected: PasswordResetRequestedEvent::class, actual: $result);
    }

    public function testForgotPasswordNonexistentUser(): void
    {
        $userRepository = $this->createStub(UserRepositoryInterface::class);
        $userRepository->method('findOneByEmail')->willReturn(null);
        self::getContainer()->set(UserRepositoryInterface::class, $userRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->forgotPassword(new PasswordResetRequestDto(email: '',signature: ''));

        self::assertNull($result);
    }

    public function testChangePassword(): void
    {
        $userRepository = $this->createStub(UserRepositoryInterface::class);
        $userRepository->method('findOneByEmail')->willReturn(new User(
            id: 1, login: 'test', password: 'test', email: 'test@test.com',
        ));
        self::getContainer()->set(UserRepositoryInterface::class, $userRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->changePassword(new PasswordChangeRequestDto(email: 'test@test.com', password: 'test'));

        self::assertInstanceOf(expected: PasswordChangeRequestedEvent::class, actual: $result);
    }

    public function testValidateNonexistentToken(): void
    {
        $tokenRepository = $this->createStub(PasswordResetTokenRepository::class);
        $tokenRepository->method('findTokenByEmail')->willReturn(null);
        self::getContainer()->set(PasswordResetTokenRepository::class, $tokenRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->validateToken(new PasswordResetTokenDto(email: '',token: ''));

        self::assertFalse($result);
    }

    public function testValidateExpiredToken(): void
    {
        $tokenRepository = $this->createStub(PasswordResetTokenRepository::class);
        $tokenRepository->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(value: 'qwerty1234', expiresAt: (new DateTimeImmutable())->sub(new DateInterval('PT1H')),)
        );
        self::getContainer()->set(PasswordResetTokenRepository::class, $tokenRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->validateToken(new PasswordResetTokenDto(email:'user@example.com', token: 'qwerty'));

        self::assertFalse($result);
    }

    public function testValidateCorrectToken(): void
    {
        $tokenRepository = $this->createStub(PasswordResetTokenRepository::class);
        $tokenRepository->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(value: 'qwerty1234', expiresAt: (new DateTimeImmutable())->add(new DateInterval('P1D')),)
        );
        self::getContainer()->set(PasswordResetTokenRepository::class, $tokenRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->validateToken(new PasswordResetTokenDto(email:'user@example.com', token: 'qwerty1234'));

        self::assertTrue($result);
    }

    public function testValidateMismatchToken(): void
    {
        $tokenRepository = $this->createStub(PasswordResetTokenRepository::class);
        $tokenRepository->method('findTokenByEmail')->willReturn(
            new ResetPasswordToken(value: 'qwerty1234', expiresAt: (new DateTimeImmutable())->add(new DateInterval('P1D')),)
        );
        self::getContainer()->set(PasswordResetTokenRepository::class, $tokenRepository);
        $sut = self::getContainer()->get(PasswordResetService::class);

        $result = $sut->validateToken(new PasswordResetTokenDto(email:'user@example.com', token: 'asdf'));

        self::assertFalse($result);
    }
}