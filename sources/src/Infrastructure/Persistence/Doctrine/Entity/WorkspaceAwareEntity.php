<?php

namespace App\Infrastructure\Persistence\Doctrine\Entity;

interface WorkspaceAwareEntity
{
    public function getWorkspace(): ?DoctrineWorkspace;

    public function setWorkspace(?DoctrineWorkspace $workspace): static;
}
