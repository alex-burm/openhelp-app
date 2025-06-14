<?php


namespace App\Application\Ticket\Dto;

use IteratorAggregate;
use ArrayIterator;

class TicketWithUserCollectionDto implements IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }

    public function add(TicketWithUserDto $view): void
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
