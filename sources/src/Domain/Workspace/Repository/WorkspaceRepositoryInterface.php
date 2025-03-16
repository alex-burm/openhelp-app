<?php

namespace App\Domain\Workspace\Repository;

use App\Domain\Workspace\Entity\Workspace;

interface WorkspaceRepositoryInterface
{
    public function findOneById(int $id): ?Workspace;

    public function findOneByCode(string $code): ?Workspace;

    /** @return  Workspace[] $workspaces */
    public function getList(int $offset = 0, int $limit = 10): array;

    public function save(Workspace $workspace): void;

    public function delete(Workspace $workspace): void;
}
