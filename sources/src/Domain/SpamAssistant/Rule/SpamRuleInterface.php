<?php

namespace App\Domain\SpamAssistant\Rule;

interface SpamRuleInterface
{
    public function match(string $text): ?string;
}
