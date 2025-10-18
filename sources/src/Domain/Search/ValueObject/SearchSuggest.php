<?php

namespace App\Domain\Search\ValueObject;

class SearchSuggest
{
    public function __construct(
        public readonly array $suggestions,
    ) {}

    public function first(): ?string
    {
        return $this->suggestions[0] ?? null;
    }
}
