<?php


namespace App\Application\Ticket\Dto;

use App\Application\Ticket\ReadModel\TicketSummaryView;
use IteratorAggregate;
use ArrayIterator;

class TicketSummaryCollectionDto implements IteratorAggregate
{
    private array $items = [];

    public function __construct(array $items = [])
    {
        foreach ($items as $item) {
            $this->add($item);
        }
    }

    public function add(TicketSummaryView $view): void
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
