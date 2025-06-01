<?php

namespace App\Domain\SpamAssistant;

use App\Domain\User\Entity\User;

class RuleBasedSpamAssistant implements SpamAssistantInterface
{
    public function check(string $text, ?User $user = null): SpamCheckResult
    {
        foreach ($this->getRules() as $rule) {
            $reason = $rule->match($text);
            if (false === \is_null($reason)) {
                return new SpamCheckResult(true, [$reason]);
            }
        }

        return new SpamCheckResult(false, []);
    }

    public function getRules(): \Generator
    {
        yield new Rule\TooManyLinksRule();
        yield new Rule\RepeatedCharactersRule();
        yield new Rule\ProfanityWordListRule();
        yield new Rule\SuspiciousPhrasesRule();
        yield new Rule\FrequentWordRepeatRule();
        yield new Rule\AllCapsRule();
    }
}
