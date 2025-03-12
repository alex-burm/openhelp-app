<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Ticket\Entity\Ticket;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineTicket;

readonly final class DoctrineTicketMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = Ticket::class;
    const DOCTRINE_CLASS_NAME = DoctrineTicket::class;
}
