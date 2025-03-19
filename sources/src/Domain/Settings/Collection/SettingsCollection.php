<?php


namespace App\Domain\Settings\Collection;

use App\Domain\Settings\Entity\Settings;
use App\Domain\Settings\ValueObject\SettingName;

class SettingsCollection implements \IteratorAggregate, \Countable
{
    public function __construct(
        protected array $settings = [],
    ) {
        foreach ($settings as $setting) {
            $this->add($setting);
        }
    }

    public function add(Settings $setting): void
    {
        $this->settings[$setting->getName()->value] = $setting;
    }

    public function get(SettingName $name): ?Settings
    {
        return $this->settings[$name->value] ?? null;
    }

    public function all(): array
    {
        return $this->settings;
    }

    public function count(): int
    {
        return count($this->settings);
    }

    public function getIterator(): \ArrayIterator
    {
        return new \ArrayIterator($this->settings);
    }
}
