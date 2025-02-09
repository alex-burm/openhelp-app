<?php

namespace App\Domain\User\Repository;

use App\Domain\User\Entity\User;

interface UserRepository
{
    public function findOneById(int $id): ?User;

    public function findOneByLogin(string $login): ?User;

    public function save(User $user): void;

    public function delete(User $user): void;
}
