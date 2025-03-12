<?php

namespace App\Infrastructure\Persistence\Redis;

use Symfony\Component\RateLimiter\RateLimit;
use Symfony\Component\RateLimiter\RateLimiterFactory;

class ForgotPasswordLimiterStorage
{
    public function __construct(
        protected RateLimiterFactory $rateLimiterFactory,
    ) {
    }

    public function consume(string $email): RateLimit
    {
        return $this->rateLimiterFactory->create('forgot_password:' . $email)->consume();
    }

    public function reset(string $email): void
    {
        $this->rateLimiterFactory->create('forgot_password:' . $email)->reset();
    }
}

