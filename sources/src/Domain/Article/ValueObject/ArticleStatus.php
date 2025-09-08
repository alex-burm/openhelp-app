<?php

namespace App\Domain\Article\ValueObject;

enum ArticleStatus: int
{
    case DRAFT      = 0;
    case PUBLISHED  = 1;

    public function isPublished(): bool
    {
        return $this === self::PUBLISHED;
    }

    public function is(bool $value): bool
    {
        return $this === ($value ? self::PUBLISHED : self::DRAFT);
    }

    public function toggle(): self
    {
        return $this->isPublished() ? self::DRAFT : self::PUBLISHED;
    }
}
