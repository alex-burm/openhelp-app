<?php

namespace App\Domain\Ticket\Entity;

use App\Domain\Ticket\ValueObject\TicketChannel;
use App\Domain\Ticket\ValueObject\TicketPriority;
use App\Domain\Ticket\ValueObject\TicketStatus;
use Symfony\Component\Uid\Uuid;

class Ticket
{
    const DEFAULT_TITLE = 'Untitled ticket';

    protected \DateTimeImmutable $createdAt;

    public function __construct(
        protected ?Uuid $id = null,
        protected ?string $title = null,
        protected ?string $message = null,
        protected ?int $customerId = null,
        protected ?int $assigneeId = null,
        protected TicketPriority $priority = TicketPriority::MEDIUM,
        protected TicketStatus $status = TicketStatus::NEW,
        protected TicketChannel $channel = TicketChannel::EMAIL,
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

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): void
    {
        $this->message = $message;
    }

    public function getCustomerId(): ?int
    {
        return $this->customerId;
    }

    public function setCustomerId(?int $customerId): void
    {
        $this->customerId = $customerId;
    }

    public function getAssigneeId(): ?int
    {
        return $this->assigneeId;
    }

    public function setAssigneeId(?int $assigneeId): void
    {
        $this->assigneeId = $assigneeId;
    }

    public function getPriority(): TicketPriority
    {
        return $this->priority;
    }

    public function setPriority(TicketPriority $priority): void
    {
        $this->priority = $priority;
    }

    public function getStatus(): TicketStatus
    {
        return $this->status;
    }

    public function setStatus(TicketStatus $status): void
    {
        $this->status = $status;
    }

    public function getChannel(): TicketChannel
    {
        return $this->channel;
    }

    public function setChannel(TicketChannel $channel): void
    {
        $this->channel = $channel;
    }
}
