<?php

namespace App\Domain\Common\Event;

interface EventDispatcherInterface
{
    /**
     * Dispatches an event to all registered listeners.
     *
     * @template T of object
     *
     * @param T $event The event to pass to the event handlers/listeners
     * @return T The passed $event MUST be returned
     */
    public function dispatch(EventInterface $event): EventInterface;
}
