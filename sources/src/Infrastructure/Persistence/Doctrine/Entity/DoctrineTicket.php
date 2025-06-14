<?php

namespace App\Infrastructure\Persistence\Doctrine\Entity;

use App\Infrastructure\Persistence\Doctrine\Repository\DoctrineUserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Types\UuidType;
use Symfony\Component\Serializer\Attribute\Ignore;
use Symfony\Component\Uid\Uuid;

#[ORM\Entity(repositoryClass: DoctrineUserRepository::class)]
#[ORM\Table(name: 'ticket')]
class DoctrineTicket implements WorkspaceAwareEntity
{
    use WorkspaceTrait;

    #[ORM\Id]
    #[ORM\Column(type: UuidType::NAME)]
    #[ORM\GeneratedValue(strategy: 'CUSTOM')]
    #[ORM\CustomIdGenerator(class: 'doctrine.uuid_generator')]
    protected ?Uuid $id = null;

    #[ORM\Column(type: 'string', nullable: false)]
    protected ?string $title = '';

    #[ORM\Column(type: 'string', nullable: false)]
    protected ?string $message = '';

    #[ORM\Column(type: 'integer', nullable: false)]
    protected ?int $priority;

    #[ORM\Column(type: 'integer', nullable: false)]
    protected ?int $status;

    #[ORM\Column(type: 'integer', nullable: false)]
    protected ?int $channel;

    #[Ignore]
    #[ORM\Column(type: 'datetime_immutable', nullable: false)]
    protected \DateTimeImmutable $createdAt;

    #[Ignore]
    #[ORM\Column(type: 'datetime_immutable', nullable: false)]
    protected \DateTimeImmutable $updatedAt;

    #[Ignore]
    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    protected ?\DateTimeImmutable $deletedAt;

    #[ORM\ManyToOne(targetEntity: DoctrineUser::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'customer_id', referencedColumnName: 'id', nullable: false)]
    protected ?DoctrineUser $customer = null;

    #[ORM\ManyToOne(targetEntity: DoctrineUser::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'assignee_id', referencedColumnName: 'id', nullable: false)]
    protected ?DoctrineUser $assignee = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
        $this->updatedAt = new \DateTimeImmutable();
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

    public function getPriority(): ?int
    {
        return $this->priority;
    }

    public function setPriority(?int $priority): void
    {
        $this->priority = $priority;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(?int $status): void
    {
        $this->status = $status;
    }

    public function getChannel(): ?int
    {
        return $this->channel;
    }

    public function setChannel(?int $channel): void
    {
        $this->channel = $channel;
    }

    public function getCreatedAt(): \DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): void
    {
        $this->createdAt = $createdAt;
    }

    public function getUpdatedAt(): \DateTimeImmutable
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeImmutable $updatedAt): void
    {
        $this->updatedAt = $updatedAt;
    }

    public function getDeletedAt(): ?\DateTimeImmutable
    {
        return $this->deletedAt;
    }

    public function setDeletedAt(?\DateTimeImmutable $deletedAt): void
    {
        $this->deletedAt = $deletedAt;
    }

    public function getCustomer(): ?DoctrineUser
    {
        return $this->customer;
    }

    public function setCustomer(?DoctrineUser $customer): void
    {
        $this->customer = $customer;
    }

    public function getAssignee(): ?DoctrineUser
    {
        return $this->assignee;
    }

    public function setAssignee(?DoctrineUser $assignee): void
    {
        $this->assignee = $assignee;
    }
}
