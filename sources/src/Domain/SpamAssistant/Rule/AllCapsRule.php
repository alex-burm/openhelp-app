<?php

namespace App\Domain\SpamAssistant\Rule;

class AllCapsRule implements SpamRuleInterface
{
    protected const MAX_CAPS_RATIO = 0.7;

    protected const MIN_LENGTH = 10;

    public function match(string $text): ?string
    {
        $length = \mb_strlen($text);
        if ($length < self::MIN_LENGTH) {
            return null;
        }

        $uppercaseCount = 0;
        $analyzableCount = 0;

        for ($i = 0; $i < $length; $i++) {
            $char = \mb_substr($text, $i, 1);
            $upper = \mb_strtoupper($char);
            $lower = \mb_strtolower($char);

            if ($upper !== $lower) {
                $analyzableCount++;
                if ($char === $upper) {
                    $uppercaseCount++;
                }
            }
        }

        if ($analyzableCount === 0) {
            return null;
        }

        $ratio = $uppercaseCount / $analyzableCount;
        return $ratio >= self::MAX_CAPS_RATIO ? 'too_much_caps' : null;
    }
}
