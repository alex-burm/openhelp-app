<?php

namespace App\Application\User\Dto;

readonly class UserWithWorkspaceRegisterDto
{
    public function __construct(
        public string $workspace,
        public string $password,
        public string $name,
        public string $email,
    ) {
    }
}
