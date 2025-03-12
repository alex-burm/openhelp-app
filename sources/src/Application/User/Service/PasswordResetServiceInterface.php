<?php


namespace App\Application\User\Service;

use App\Application\User\Dto\PasswordChangeRequestDto;
use App\Application\User\Dto\PasswordResetRequestDto;
use App\Application\User\Dto\PasswordResetTokenDto;
use App\Domain\User\Event\PasswordChangeRequestedEvent;
use App\Domain\User\Event\PasswordResetRequestedEvent;

interface PasswordResetServiceInterface
{
    public function forgotPassword(PasswordResetRequestDto $data): ?PasswordResetRequestedEvent;

    public function changePassword(PasswordChangeRequestDto $data): ?PasswordChangeRequestedEvent;

    public function validateToken(PasswordResetTokenDto $data): bool;
}
