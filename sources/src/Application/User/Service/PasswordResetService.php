<?php


namespace App\Application\User\Service;


use App\Application\User\Dto\PasswordChangeRequestDto;
use App\Application\User\Dto\PasswordResetRequestDto;
use App\Application\User\Dto\PasswordResetTokenDto;
use App\Domain\User\Event\PasswordChangeRequestedEvent;
use App\Domain\User\Event\PasswordResetRequestedEvent;
use App\Domain\User\Repository\PasswordResetTokenRepository;
use App\Domain\User\Repository\UserRepository;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\User\ValueObject\ResetPasswordToken;

class PasswordResetService
{
    public function __construct(
        protected UserRepository $userRepository,
        protected PasswordResetTokenRepository $tokenRepository,
        protected PasswordHasher $passwordHasher,
    ) {
    }

    public function forgotPassword(PasswordResetRequestDto $data): ?PasswordResetRequestedEvent
    {
        $user = $this->userRepository->findOneByEmail($data->email);
        if (\is_null($user)) {
            return null;
        }

        $token = ResetPasswordToken::generate();
        $this->tokenRepository->save($data->email, $token);

        return new PasswordResetRequestedEvent($data->email, $token);
    }

    public function changePassword(PasswordChangeRequestDto $data): ?PasswordChangeRequestedEvent
    {
        $user = $this->userRepository->findOneByEmail($data->email);
        if (\is_null($user)) {
            return null;
        }

        $hashedPassword = $this->passwordHasher->hash($data->password);
        $user->setPassword($hashedPassword);
        $this->userRepository->save($user);

        return new PasswordChangeRequestedEvent($user);
    }

    public function validateToken(PasswordResetTokenDto $data): bool
    {
        $storedToken = $this->tokenRepository->findTokenByEmail($data->email);
        if (\is_null($storedToken)) {
            return false;
        }

        if ($storedToken->isExpired()) {
            return false;
        }

        $isEqual = $storedToken->getValue() === $data->token;
        if ($isEqual) {
            $this->tokenRepository->delete($data->email);
        }
        return $isEqual;
    }
}
