<?php

namespace App\Domain\SpamAssistant\Rule;

abstract class AbstractBlackListRule implements SpamRuleInterface
{
    public function match(string $text): ?string
    {
        $text = \mb_strtolower($text);
        foreach ($this->getBlackList() as $item) {
            if (\str_contains($text, $item)) {
                return $this->getReason();
            }
        }
        return null;
    }

    abstract protected function getBlackList(): array;

    abstract protected function getReason(): string;
}
