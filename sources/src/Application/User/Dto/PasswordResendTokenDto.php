<?php


namespace App\Application\User\Dto;

readonly class PasswordResendTokenDto
{
    public function __construct(
        public string $email,
    ) {
    }
}
