<?php

namespace App\Application\User\Dto;

readonly class UserToWorkspaceRegisterDto
{
    public function __construct(
        public string $password,
        public string $name,
        public string $email,
    ) {
    }
}
