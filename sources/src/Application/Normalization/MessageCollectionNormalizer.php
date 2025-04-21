<?php

namespace App\Application\Normalization;

use App\Application\Messaging\DTO\MessageViewCollectionDto;
use App\Application\Messaging\DTO\MessageViewDto;

readonly class MessageCollectionNormalizer implements NormalizerInterface
{
    public function __construct(
        protected MessageViewNormalizer $itemNormalizer
    ) {}

    public function supports(object $object): bool
    {
        return $object instanceof MessageViewCollectionDto;
    }

    public function normalize(object $object): array
    {
        return \array_map(
            fn(MessageViewDto $dto) => $this->itemNormalizer->normalize($dto),
            $object->all()
        );
    }
}
