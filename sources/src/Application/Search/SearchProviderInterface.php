<?php

namespace App\Application\Search;

use App\Domain\Search\Entity\SearchResultCollection;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Domain\Search\ValueObject\SearchProviderType;

interface SearchProviderInterface
{
    public function index(object $dto): void;

    public function delete(string $id): void;

    public function reset(): void;

    public function search(string $query, array $filters = [], int $limit = 10): SearchResultCollection;

    public function getType(): SearchProviderType;

    public function withIndex(SearchIndex $index): self;
}
