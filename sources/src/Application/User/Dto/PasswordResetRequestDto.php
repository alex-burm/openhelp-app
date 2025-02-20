<?php


namespace App\Application\User\Dto;

readonly class PasswordResetRequestDto
{
    public function __construct(
        public string $email
    ) {
    }
}
