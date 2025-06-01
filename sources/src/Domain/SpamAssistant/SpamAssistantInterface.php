<?php

namespace App\Domain\SpamAssistant;

use App\Domain\User\Entity\User;

interface SpamAssistantInterface
{
    public function check(string $text, ?User $user = null): SpamCheckResult;
}
