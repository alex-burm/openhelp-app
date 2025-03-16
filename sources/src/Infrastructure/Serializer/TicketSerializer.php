<?php

namespace App\Infrastructure\Serializer;

use App\Domain\Ticket\Entity\Ticket;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsTaggedItem;

#[AsTaggedItem('serializer.normalizer')]
class TicketSerializer implements NormalizerInterface, DenormalizerInterface
{
    public function normalize(mixed $data, string $format = null, array $context = []): array
    {
        if (false === ($data instanceof Ticket)) {
            return [];
        }

        return [
            'id' => $data->getId(),
            'title' => $data->getTitle(),
            'message' => $data->getMessage(),
            'status' => $data->getStatus()->value,
            'channel' => $data->getChannel()->value,
            'priority' => $data->getPriority()->value,
        ];
    }

    public function denormalize(mixed $data, string $type, string $format = null, array $context = []): Ticket
    {
        if (!is_array($data)) {
            throw new \InvalidArgumentException('Invalid data for Ticket deserialization');
        }

        return new Ticket(...$data);
    }

    public function supportsNormalization(mixed $data, string $format = null, array $context = []): bool
    {
        return $data instanceof Ticket;
    }

    public function supportsDenormalization(mixed $data, string $type, string $format = null, array $context = []): bool
    {
        return $type === Ticket::class;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            Ticket::class => true,
        ];
    }
}

