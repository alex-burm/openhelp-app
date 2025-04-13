<?php

namespace App\Domain\Messaging\Collection;

use App\Domain\Messaging\Entity\Message;
use IteratorAggregate;
use ArrayIterator;

class MessageCollection implements IteratorAggregate
{
    private array $messages = [];

    public function __construct(array $messages = [])
    {
        foreach ($messages as $message) {
            $this->add($message);
        }
    }

    public function add(Message $message): void
    {
        $this->messages[] = $message;
    }

    public function getIterator(): ArrayIterator
    {
        return new ArrayIterator($this->messages);
    }

    public function isEmpty(): bool
    {
        return 0 === \count($this->messages);
    }

    public function all(): array
    {
        return $this->messages;
    }
}
