<?php

namespace App\Domain\Workspace\Repository;

use App\Domain\Workspace\Entity\Workspace;

interface WorkspaceRepository
{
    public function findOneById(int $id): ?Workspace;
    public function findOneByCode(string $code): ?Workspace;

    public function save(Workspace $workspace): void;

    public function delete(Workspace $workspace): void;
}
