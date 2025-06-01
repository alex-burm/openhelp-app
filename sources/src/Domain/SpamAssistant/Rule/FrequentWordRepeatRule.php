<?php

namespace App\Domain\SpamAssistant\Rule;

class FrequentWordRepeatRule implements SpamRuleInterface
{
    private const MAX_REPEAT = 4;

    public function match(string $text): ?string
    {
        $words = \preg_split('/\s+/', mb_strtolower($text));
        $counts = \array_count_values($words);

        foreach ($counts as $word => $count) {
            if ($count > self::MAX_REPEAT && mb_strlen($word) > 2) {
                return 'word_repeated_too_much: ' . $word;
            }
        }

        return null;
    }
}
