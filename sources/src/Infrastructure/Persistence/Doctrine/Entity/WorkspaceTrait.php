<?php

namespace App\Infrastructure\Persistence\Doctrine\Entity;

use Doctrine\ORM\Mapping as ORM;

trait WorkspaceTrait
{
    #[ORM\ManyToOne(targetEntity: DoctrineWorkspace::class, cascade: ['persist'])]
    #[ORM\JoinColumn(name: 'space_id', referencedColumnName: 'id', nullable: false)]
    private ?DoctrineWorkspace $workspace = null;

    public function getWorkspace(): ?DoctrineWorkspace
    {
        return $this->workspace;
    }

    public function setWorkspace(?DoctrineWorkspace $workspace): static
    {
        $this->workspace = $workspace;
        return $this;
    }
}
