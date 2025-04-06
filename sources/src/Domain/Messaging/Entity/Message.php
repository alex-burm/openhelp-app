<?php

namespace App\Domain\Messaging\Entity;

use DateTimeImmutable;
use Symfony\Component\Uid\Uuid;

class Message
{
    protected ?Uuid $id = null;

    protected ?int $userId = null;

    protected ?DateTimeImmutable $createdAt = null;

    public function __construct(
        protected Uuid $ticketId,
        protected string $text,
        protected \DateTimeImmutable $sentAt,
    ) {
        $this->createdAt = new DateTimeImmutable();
    }

    public function getTicketId(): Uuid
    {
        return $this->ticketId;
    }

    public function setTicketId(Uuid $ticketId): void
    {
        $this->ticketId = $ticketId;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function setText(string $text): void
    {
        $this->text = $text;
    }

    public function getSentAt(): DateTimeImmutable
    {
        return $this->sentAt;
    }

    public function setSentAt(DateTimeImmutable $sentAt): void
    {
        $this->sentAt = $sentAt;
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function setId(?Uuid $id): void
    {
        $this->id = $id;
    }

    public function getUserId(): ?int
    {
        return $this->userId;
    }

    public function setUserId(?int $userId): void
    {
        $this->userId = $userId;
    }

    public function getCreatedAt(): ?DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?DateTimeImmutable $createdAt): void
    {
        $this->createdAt = $createdAt;
    }
}
