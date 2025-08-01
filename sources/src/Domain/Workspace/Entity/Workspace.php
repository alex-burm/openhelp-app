<?php

namespace App\Domain\Workspace\Entity;

class Workspace
{
    const DEFAULT_NAME = 'Untitled workspace';

    protected ?int $ownerId = null;

    public function __construct(
        protected ?int $id = null,
        protected string $name = '',
        protected string $code = '',
        protected string $token = '',
    ) {
        if (0 === \strlen($this->name)) {
            $this->name = self::DEFAULT_NAME;
        }

        if (0 === \strlen($code)) {
            $this->code = \bin2hex(\random_bytes(8));
        }

        if (0 === \strlen($this->token)) {
            $this->token = \bin2hex(\random_bytes(16));
        }
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function setId(?int $id): void
    {
        $this->id = $id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): void
    {
        $this->name = $name;
    }

    public function getCode(): string
    {
        return $this->code;
    }

    public function setCode(string $code): void
    {
        $this->code = $code;
    }

    public function getOwnerId(): ?int
    {
        return $this->ownerId;
    }

    public function setOwnerId(?int $ownerId): void
    {
        $this->ownerId = $ownerId;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken(string $token): void
    {
        $this->token = $token;
    }

    public function getMailSettings(): array|false
    {
        return [
            'host' => 'help_mailer',
//            'port' => 993,
            'port' => 143,
            'login' => 'test@local',
            'password' => 'password123'
        ];
        return false;
    }
}
