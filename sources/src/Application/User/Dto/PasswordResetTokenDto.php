<?php


namespace App\Application\User\Dto;

readonly class PasswordResetTokenDto
{
    public function __construct(
        public string $email,
        public string $token,
    ) {
    }
}
