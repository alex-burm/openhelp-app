<?php

namespace App\Domain\Search\ValueObject;

readonly class SearchSuggest
{
    public function __construct(
        public array $suggestions,
    ) {}

    public function first(): ?string
    {
        return $this->suggestions[0] ?? null;
    }

    public function isEmpty(): bool
    {
        return 0 === \count($this->suggestions);
    }
}
