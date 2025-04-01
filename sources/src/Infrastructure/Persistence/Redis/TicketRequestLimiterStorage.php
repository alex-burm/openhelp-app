<?php

namespace App\Infrastructure\Persistence\Redis;

use Symfony\Component\HttpFoundation\RateLimiter\RequestRateLimiterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\RateLimiter\RateLimit;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\Security\Http\SecurityRequestAttributes;

class TicketRequestLimiterStorage
{
    public function __construct(
        protected RateLimiterFactory $rateLimiterFactory,
    ) {
    }

    public function consume(string $ip): RateLimit
    {
        return $this->rateLimiterFactory->create('ticket_request:' . $ip)->consume();
    }

    public function reset(string $ip): void
    {
        $this->rateLimiterFactory->create('ticket_request:' . $ip)->reset();
    }
}

