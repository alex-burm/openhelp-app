<?php

namespace App\Infrastructure\Persistence\Redis;

use App\Domain\SpamAssistant\MuteStorageInterface;
use Psr\Cache\CacheItemPoolInterface;

class MuteStorage implements MuteStorageInterface
{
    private const KEY_PREFIX = 'mute_user_';

    public function __construct(
        protected CacheItemPoolInterface $cache,
    ) {
    }

    private function getKey(int $userId): string
    {
        return self::KEY_PREFIX . $userId;
    }

    public function isMuted(int $userId): bool
    {
        $item = $this->cache->getItem($this->getKey($userId));
        return $item->isHit();
    }

    public function mute(int $userId, int $seconds): void
    {
        $item = $this->cache->getItem($this->getKey($userId));
        $item->set(true);
        $item->expiresAfter($seconds);
        $this->cache->save($item);
    }

    public function unmute(int $userId): void
    {
        $this->cache->deleteItem($this->getKey($userId));
    }
}
