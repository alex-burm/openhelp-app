<?php

namespace App\Application\Category\Dto;

class CategoryListResultDto implements \IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }

    public function add(CategoryListItemDto $view): void
    {
        $this->items[] = $view;
    }

    public function getIterator(): \ArrayIterator
    {
        return new \ArrayIterator($this->items);
    }

    public function all(): array
    {
        return $this->items;
    }
}
