<?php


namespace App\Domain\Settings\Repository;

use App\Domain\Settings\Collection\SettingsCollection;
use App\Domain\Settings\Entity\Settings;
use App\Domain\Settings\ValueObject\SettingName;

interface SettingsRepositoryInterface
{
    public function get(SettingName $name): ?Settings;

    public function getAll(): SettingsCollection;

    public function save(Settings $settings): void;

    public function delete(Settings $settings): void;
}
