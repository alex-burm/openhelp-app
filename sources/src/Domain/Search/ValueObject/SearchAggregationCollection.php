<?php

namespace App\Domain\Search\ValueObject;

use ArrayIterator;
use IteratorAggregate;

final class SearchAggregationCollection implements IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }
    public function add(SearchAggregation $aggregation): self
    {
        $this->items[] = $aggregation;
        return $this;
    }

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->items);
    }

    public function isEmpty(): bool
    {
        return 0 === \count($this->items);
    }

    public function all(): array
    {
        return $this->items;
    }
}
