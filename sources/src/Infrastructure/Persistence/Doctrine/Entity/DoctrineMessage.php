<?php

namespace App\Infrastructure\Persistence\Doctrine\Entity;

use App\Domain\Messaging\ValueObject\MessageType;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\User\Entity\User;
use App\Infrastructure\Persistence\Doctrine\Repository\DoctrineMessageRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: DoctrineMessageRepository::class)]
#[ORM\Table(name: 'message')]
class DoctrineMessage implements WorkspaceAwareEntity
{
    use WorkspaceTrait;

    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    protected ?Uuid $id = null;

    #[ORM\ManyToOne(targetEntity: DoctrineTicket::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'ticket_id', referencedColumnName: 'id', nullable: false)]
    protected ?DoctrineTicket $ticket = null;

    #[ORM\ManyToOne(targetEntity: DoctrineUser::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'user_id', referencedColumnName: 'id', nullable: false)]
    protected ?DoctrineUser $user = null;

    #[ORM\Column(type: 'string', nullable: false)]
    protected string $text = '';

    #[ORM\Column(type: 'integer', nullable: false)]
    protected int $type = MessageType::TYPE_MESSAGE->value;

    #[ORM\Column(type: 'string', nullable: true)]
    protected ?string $clientId = null;

    #[ORM\Column(type: 'datetime_immutable', nullable: false)]
    protected \DateTimeImmutable $createdAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: false)]
    protected \DateTimeImmutable $sentAt;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->sentAt = new \DateTimeImmutable();
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function setId(?Uuid $id): void
    {
        $this->id = $id;
    }

    public function getClientId(): ?string
    {
        return $this->clientId;
    }

    public function setClientId(?string $clientId): void
    {
        $this->clientId = $clientId;
    }

    public function getTicket(): ?DoctrineTicket
    {
        return $this->ticket;
    }

    public function setTicket(?DoctrineTicket $ticket): void
    {
        $this->ticket = $ticket;
    }

    public function getUser(): ?DoctrineUser
    {
        return $this->user;
    }

    public function setUser(?DoctrineUser $user): void
    {
        $this->user = $user;
    }

    public function getText(): string
    {
        return $this->text;
    }

    public function setText(string $text): void
    {
        $this->text = $text;
    }

    public function getType(): int
    {
        return $this->type;
    }

    public function setType(int $type): void
    {
        $this->type = $type;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getSentAt(): \DateTimeImmutable
    {
        return $this->sentAt;
    }

    public function setSentAt(\DateTimeImmutable $sentAt): void
    {
        $this->sentAt = $sentAt;
    }
}
