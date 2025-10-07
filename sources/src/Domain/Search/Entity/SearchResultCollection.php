<?php

namespace App\Domain\Search\Entity;

use IteratorAggregate;
use ArrayIterator;

class SearchResultCollection implements IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }

    public function add(SearchResultItem $view): void
    {
        $this->items[] = $view;
    }

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->items);
    }

    public function all(): array
    {
        return $this->items;
    }
}
