<?php

namespace App\Domain\Article\ValueObject;

enum ArticleStatus: string
{
    case DRAFT      = 'draft';
    case PUBLISHED  = 'published';

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
