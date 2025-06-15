<?php

namespace App\Domain\SpamAssistant;

readonly class SpamCheckResult
{
    public function __construct(
        public bool $isSpam,
        public array $reasons,
    ) {}
}
