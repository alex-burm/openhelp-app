<?php

namespace App\Domain\SpamAssistant;


interface MuteStorageInterface
{
    public function isMuted(int $userId): bool;

    public function mute(int $userId, int $seconds): void;

    public function unmute(int $userId): void;
}
