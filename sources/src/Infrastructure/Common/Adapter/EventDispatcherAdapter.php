<?php

namespace App\Infrastructure\Common\Adapter;

use Symfony\Contracts\EventDispatcher\EventDispatcherInterface as SymfonyEventDispatcher;
use App\Domain\Common\Event\EventDispatcherInterface as DomainEventDispatcherInterface;
use App\Domain\Common\Event\EventInterface as DomainEventInterface;

class EventDispatcherAdapter implements DomainEventDispatcherInterface
{
    public function __construct(
        protected SymfonyEventDispatcher $eventDispatcher,
    ) {
    }

    public function dispatch(DomainEventInterface $event): DomainEventInterface
    {
        return $this->eventDispatcher->dispatch($event);
    }
}
