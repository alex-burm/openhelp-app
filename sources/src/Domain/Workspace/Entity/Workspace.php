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
    ) {
        if (0 === \strlen($name)) {
            $this->name = self::DEFAULT_NAME;
        }

        if (0 === \strlen($code)) {
            $this->code = \bin2hex(\random_bytes(8));
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
}
