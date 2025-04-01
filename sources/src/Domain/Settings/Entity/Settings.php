<?php

namespace App\Domain\Settings\Entity;

use App\Domain\Settings\ValueObject\SettingName;

class Settings
{
    public function __construct(
        protected SettingName $name,
        protected ?string     $value = null,
        protected bool        $sensitive = false,
    ) {
    }

    public function getName(): SettingName
    {
        return $this->name;
    }

    public function setName(SettingName $name): void
    {
        $this->name = $name;
    }

    public function getValue(): string
    {
        return $this->value;
    }

    public function setValue(string $value): void
    {
        $this->value = $value;
    }

    public function isSensitive(): bool
    {
        return $this->sensitive;
    }

    public function setIsSensitive(bool $isSensitive): void
    {
        $this->sensitive = $isSensitive;
    }
}
