<?php

namespace App\Domain\Category\Entity;

use Symfony\Component\Uid\Uuid;

class Category
{
    public function __construct(
        protected ?Uuid $id = null,
        protected ?string $name = null,
    ) {
    }

    public function getId(): ?Uuid
    {
        return $this->id;
    }

    public function setId(?Uuid $id): void
    {
        $this->id = $id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): void
    {
        $this->name = $name;
    }
}
