<?php

namespace App\Domain\User\Service;

interface PasswordHasher
{
    public function hash(string $plainPassword): string;
}
