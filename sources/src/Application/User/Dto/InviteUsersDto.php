<?php

namespace App\Application\User\Dto;

class InviteUsersDto
{
    public function __construct(
        public array $emails = []
    ) {
    }
}
