<?php

namespace App\Domain\Ticket\ValueObject;

enum TicketPriority: int
{
    case LOW = 0;
    case MEDIUM = 1;
    case HIGH = 2;

    public function toCamelCase(): string
    {
        return \lcfirst(\str_replace('_', '', \ucwords(\strtolower($this->name), '_')));
    }

    public function getLabel(): string
    {
        return \lcfirst(\str_replace('_', ' ', \strtolower($this->name)));
    }
}
