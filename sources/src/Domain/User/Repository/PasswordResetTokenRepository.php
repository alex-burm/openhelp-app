<?php

namespace App\Domain\User\Repository;

use App\Domain\User\ValueObject\ResetPasswordToken;

interface PasswordResetTokenRepository
{
    public function findTokenByEmail(string $email): ?ResetPasswordToken;

    public function save(string $email, ResetPasswordToken $token): void;

    public function delete(string $email): void;
}
