<?php

namespace App\Domain\Workspace\Entity;

final class NullWorkspace extends Workspace
{
    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return 0;
    }

    public function getName(): string
    {
        return 'Null Workspace';
    }

    public function getCode(): string
    {
        return '';
    }

    public function getOwnerId(): ?int
    {
        return null;
    }

    public function getToken(): string
    {
        return '';
    }

    public function getMailSettings(): array|false
    {
        return false;
    }
}
