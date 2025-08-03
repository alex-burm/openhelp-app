<?php

namespace App\Domain\Article\Entity;

use App\Domain\Article\ValueObject\ArticleStatus;
use Symfony\Component\Uid\Uuid;

class Article
{
    const DEFAULT_TITLE = 'Untitled article';

    protected \DateTimeImmutable $createdAt;

    public function __construct(
        protected ?Uuid $id = null,
        protected ?string $title = null,
        protected ?string $content = null,
        protected ArticleStatus $status = ArticleStatus::DRAFT,
    ) {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function setId(?Uuid $id): void
    {
        $this->id = $id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): void
    {
        $this->title = $title;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): void
    {
        $this->content = $content;
    }

    public function getStatus(): ArticleStatus
    {
        return $this->status;
    }

    public function publish(): void
    {
        if ($this->status->isPublished()) {
            return;
        }
        $this->status = ArticleStatus::PUBLISHED;
    }

    public function unpublish(): void
    {
        if (false === $this->status->isPublished()) {
            return;
        }
        $this->status = ArticleStatus::DRAFT;
    }

    public function toggleStatus(): void
    {
        $this->status = $this->status->toggle();
    }
}
