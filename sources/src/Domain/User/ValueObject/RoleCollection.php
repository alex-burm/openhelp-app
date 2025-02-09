<?php

namespace App\Domain\User\ValueObject;

use InvalidArgumentException;

class RoleCollection
{
    private array $roles;

    public function __construct(array $roles = [])
    {
        foreach ($roles as $role) {
            if (false === ($role instanceof Role)) {
                throw new InvalidArgumentException(\sprintf('Role "%s" should be instance of Role class', $role));
            }
        }

        $this->roles = \array_unique($roles);
    }

    public function getRoles(): array
    {
        return $this->roles;
    }

    public function hasRole(Role $role): bool
    {
        return \in_array($role, $this->roles, true);
    }

    public function withAddedRole(Role $role): self
    {
        if ($this->hasRole($role)) {
            return $this;
        }

        $newRoles = $this->roles;
        $newRoles[] = $role;

        return new self($newRoles);
    }

    public function withoutRole(Role $role): self
    {
        if (false === $this->hasRole($role)) {
            return $this;
        }

        $newRoles = \array_filter($this->roles, static fn (Role $r) => $r !== $role);

        return new self($newRoles);
    }
}
