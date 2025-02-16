<?php

namespace App\Infrastructure\Persistence\Redis;

use Symfony\Component\HttpFoundation\RateLimiter\RequestRateLimiterInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\RateLimiter\RateLimit;
use Symfony\Component\RateLimiter\RateLimiterFactory;
use Symfony\Component\Security\Http\SecurityRequestAttributes;

class LoginRateLimiterStorage implements RequestRateLimiterInterface
{
    public function __construct(
        protected RateLimiterFactory $rateLimiterFactory,
    ) {
    }

    public function consume(Request $request): RateLimit
    {
        $login = $request->attributes->get(SecurityRequestAttributes::LAST_USERNAME);
        return $this->rateLimiterFactory->create($login)->consume();
    }

    public function reset(Request $request): void
    {
        $login = $request->attributes->get(SecurityRequestAttributes::LAST_USERNAME);
        $this->rateLimiterFactory->create($login)->reset();
    }
}

