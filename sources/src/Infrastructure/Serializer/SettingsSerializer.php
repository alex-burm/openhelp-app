<?php

namespace App\Infrastructure\Serializer;

use App\Domain\Settings\Entity\Settings;
use App\Domain\Settings\ValueObject\SettingName;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsTaggedItem;

#[AsTaggedItem('serializer.normalizer')]
class SettingsSerializer implements NormalizerInterface, DenormalizerInterface
{
    public function normalize(mixed $data, string $format = null, array $context = []): array
    {
        if (false === ($data instanceof Settings)) {
            return [];
        }

        return [
            'name' => $data->getName(),
            'value' => $data->getValue(),
            'sensitive' => $data->isSensitive(),
        ];
    }

    public function denormalize(mixed $data, string $type, string $format = null, array $context = []): Settings
    {
        if (false === \is_array($data)) {
            throw new \InvalidArgumentException('Invalid data for Settings deserialization');
        }

        $data['name'] = SettingName::from($data['name']);
        return new Settings(...$data);
    }

    public function supportsNormalization(mixed $data, string $format = null, array $context = []): bool
    {
        return $data instanceof Settings;
    }

    public function supportsDenormalization(mixed $data, string $type, string $format = null, array $context = []): bool
    {
        return $type === Settings::class;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            Settings::class => true,
        ];
    }
}

