<?php


namespace App\Application\User\Dto;

readonly class PasswordChangeRequestDto
{
    public function __construct(
        public string $email,
        public string $password
    ) {
    }
}
