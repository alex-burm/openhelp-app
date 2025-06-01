<?php

namespace App\Domain\SpamAssistant\Rule;

class SuspiciousPhrasesRule extends AbstractBlackListRule implements SpamRuleInterface
{
    protected function getBlackList(): array
    {
        return [
            'free money',
            'work from home',
            'click here',
            'buy now',
            'subscribe to my channel',
            'limited time offer',
        ];
    }

    protected function getReason(): string
    {
        return 'suspicious_phrase';
    }
}
