<?php

namespace App\Domain\SpamAssistant\Rule;

class RepeatedCharactersRule implements SpamRuleInterface
{
    private const REPEATED_CHARACTERS_PATTERN = '/(.)\\1{5,}/u';

    public function match(string $text): ?string
    {
        if (\preg_match(self::REPEATED_CHARACTERS_PATTERN, $text)) {
            return 'repeated_characters';
        }
        return null;
    }
}
