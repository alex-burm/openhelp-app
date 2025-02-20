<?php

namespace App\Domain\User\Mailer;

interface ResetPasswordMailerInterface
{
    public function send(string $email, string $token): void;
}
