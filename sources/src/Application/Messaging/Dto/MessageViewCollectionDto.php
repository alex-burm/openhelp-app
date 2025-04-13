<?php


namespace App\Application\Messaging\Dto;

use IteratorAggregate;
use ArrayIterator;

class MessageViewCollectionDto implements IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }

    public function add(MessageViewDto $view): void
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
