<?php

namespace App\Domain\SpamAssistant\Rule;

class TooManyLinksRule implements SpamRuleInterface
{
    public function match(string $text): ?string
    {
        return \substr_count($text, 'http') > 3 ? 'too_many_links' : null;
    }
}
