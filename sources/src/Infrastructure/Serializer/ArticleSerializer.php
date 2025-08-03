<?php

namespace App\Infrastructure\Serializer;

use App\Domain\Article\Entity\Article;
use App\Domain\Article\ValueObject\ArticleStatus;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsTaggedItem;
use Symfony\Component\Uid\Uuid;

#[AsTaggedItem('serializer.normalizer')]
class ArticleSerializer implements NormalizerInterface, DenormalizerInterface
{
    public function normalize(mixed $data, string $format = null, array $context = []): array
    {
        if (false === ($data instanceof Article)) {
            return [];
        }

        return [
            'id' => $data->getId(),
            'title' => $data->getTitle(),
            'content' => $data->getContent(),
            'status' => (int)$data->getStatus()->isPublished(),
        ];
    }

    public function denormalize(mixed $data, string $type, string $format = null, array $context = []): Article
    {
        if (false === \is_array($data)) {
            throw new \InvalidArgumentException('Invalid data for Article deserialization');
        }

        $data['id'] = Uuid::fromRfc4122($data['id'] ?? null);
        $data['status'] = $data['status'] ?? false ? ArticleStatus::PUBLISHED : ArticleStatus::DRAFT;
        return new Article(...$data);
    }

    public function supportsNormalization(mixed $data, string $format = null, array $context = []): bool
    {
        return $data instanceof Article;
    }

    public function supportsDenormalization(mixed $data, string $type, string $format = null, array $context = []): bool
    {
        return $type === Article::class;
    }

    public function getSupportedTypes(?string $format): array
    {
        return [
            Article::class => true,
        ];
    }
}

