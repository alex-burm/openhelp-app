<?php


namespace App\Domain\Settings\Service;

use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Domain\Settings\Entity\Settings;
use App\Domain\Settings\Repository\SettingsRepositoryInterface;
use App\Domain\Settings\ValueObject\SettingName;

class SettingsService
{
    public function __construct(
        protected SettingsRepositoryInterface $repository,
        protected EncryptorInterface          $encryptionService,
    ) {
    }

    public function setSetting(SettingName $name, ?string $value, bool $isSensitive = false): void
    {
        $setting = $this->repository->get($name);

        if (\is_null($setting)) {
            $setting = new Settings($name);
        }

        $setting->setValue($isSensitive ? $this->encryptionService->encrypt($value) : $value);
        $this->repository->save($setting);
    }

    public function getSetting(SettingName $name): ?string
    {
        $setting = $this->repository->getAll()->get($name);
        return $setting?->isSensitive()
            ? $this->encryptionService->decrypt($setting->getValue())
            : $setting?->getValue();
    }
}
