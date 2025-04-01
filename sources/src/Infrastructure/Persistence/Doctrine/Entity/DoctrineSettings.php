<?php

namespace App\Infrastructure\Persistence\Doctrine\Entity;

use App\Infrastructure\Persistence\Doctrine\Repository\DoctrineSettingsRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Attribute\Ignore;

#[ORM\Entity(repositoryClass: DoctrineSettingsRepository::class)]
#[ORM\Table(name: 'settings')]
class DoctrineSettings implements WorkspaceAwareEntity
{
    use WorkspaceTrait;

    #[Ignore]
    #[ORM\Id]
    #[ORM\ManyToOne(targetEntity: DoctrineWorkspace::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'space_id', referencedColumnName: 'id', nullable: false)]
    private ?DoctrineWorkspace $workspace = null;

    #[ORM\Id]
    #[ORM\Column(type: 'string', nullable: false)]
    protected string $name = '';

    #[ORM\Column(type: 'string', nullable: false)]
    protected string $value = '';

    #[ORM\Column(type: 'boolean', nullable: false)]
    protected bool $sensitive = false;

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function setValue(string $value): void
    {
        $this->value = $value;
    }

    public function isSensitive(): bool
    {
        return $this->sensitive;
    }

    public function setSensitive(bool $sensitive): void
    {
        $this->sensitive = $sensitive;
    }
}
