<?php

namespace App\Infrastructure\Persistence\Redis\Repository;

use App\Domain\User\Repository\PasswordResetTokenRepository;
use App\Domain\User\ValueObject\ResetPasswordToken;
use Symfony\Component\Cache\CacheItem;
use Symfony\Contracts\Cache\CacheInterface;

class RedisPasswordResetTokenRepository implements PasswordResetTokenRepository
{
    public function __construct(
        protected CacheInterface $cache,
    ) {
    }

    protected function getKey(string $email): string
    {
        return \sha1(\sprintf('reset_password:%s', $email));
    }

    public function save(string $email, ResetPasswordToken $token): void
    {
        $this->cache->delete($this->getKey($email));
        $this->cache->get($this->getKey($email), static function (CacheItem $pool) use ($token) {
            $pool->expiresAt($token->getExpiresAt());
            return \json_encode([
                'token' => $token->getValue(),
                'expiredAt' => $token->getExpiresAt()->getTimestamp(),
            ]);
        });
    }

    public function findTokenByEmail(string $email): ?ResetPasswordToken
    {
        $data = $this->cache->get($this->getKey($email), fn () => null);
        if (\is_null($data)) {
            return null;
        }

        $decoded = \json_decode($data, true);
        return new ResetPasswordToken($decoded['token'], new \DateTimeImmutable('@' . $decoded['expiredAt']));
    }

    public function delete(string $email): void
    {
        $this->cache->delete($this->getKey($email));
    }
}
