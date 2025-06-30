<?php

namespace App\Domain\Ticket\ValueObject;

enum TicketStatus: int
{
    case NEW = 0;
    case IN_PROGRESS = 1;
    case RESOLVED = 2;

    public function toCamelCase(): string
    {
        return \lcfirst(\str_replace('_', '', \ucwords(\strtolower($this->name), '_')));
    }

    public function getLabel(): string
    {
        return \lcfirst(\str_replace('_', ' ', \strtolower($this->name)));
    }
}
