<?php

namespace App\Infrastructure\Security;

use App\Domain\User\ValueObject\Role;
use App\Domain\User\ValueObject\RoleCollection;

class RoleMapper
{
    public static function fromCollection(RoleCollection $collection): array
    {
        return array_map(static fn (Role $role) => match ($role) {
            Role::MANAGER => 'ROLE_MANAGER',
            Role::CUSTOMER => 'ROLE_CUSTOMER',
            default => 'ROLE_USER',
        }, $collection->getRoles());
    }

    public static function toCollection(array $values): RoleCollection
    {
        $roles = \array_map(static fn ($role) => match ($role) {
            'ROLE_MANAGER' => Role::MANAGER,
            'ROLE_CUSTOMER' => Role::CUSTOMER,
            default => Role::USER,
        }, $values);

        return new RoleCollection($roles);
    }
}
