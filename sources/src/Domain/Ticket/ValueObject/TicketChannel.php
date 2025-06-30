<?php

namespace App\Domain\Ticket\ValueObject;

enum TicketChannel: int
{
    case EMAIL = 0;
    case CHAT = 1;
    case FORM = 2;

    public function toCamelCase(): string
    {
        return \lcfirst(\str_replace('_', '', \ucwords(\strtolower($this->name), '_')));
    }

    public function getLabel(): string
    {
        return \lcfirst(\str_replace('_', ' ', \strtolower($this->name)));
    }
}
