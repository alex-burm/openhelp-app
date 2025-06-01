<?php

namespace App\Domain\SpamAssistant\Rule;

class ProfanityWordListRule extends AbstractBlackListRule implements SpamRuleInterface
{
    protected function getBlackList(): array
    {
        return ['fuck', 'shit', 'бля', 'сука', 'нахуй', 'пизд', 'еба'];
    }

    protected function getReason(): string
    {
        return 'profanity_detected';
    }
}
