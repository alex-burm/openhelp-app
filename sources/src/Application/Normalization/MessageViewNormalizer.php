<?php

namespace App\Application\Normalization;

use App\Application\Messaging\DTO\MessageViewDto;
use App\Domain\Messaging\ValueObject\MessageType;

class MessageViewNormalizer implements NormalizerInterface
{
    public function supports(object $object): bool
    {
        return $object instanceof MessageViewDto;
    }

    public function normalize(object $object): array
    {
        return [
            'serverId' => $object->serverId,
            'clientId' => $object->clientId,
            'text' => $object->text,
            'type' => MessageType::from($object->type)->label(),
            'direction' => $object->direction,
            'datetime' => $object->datetime->format(DATE_ATOM),
            'name' => $object->name,
        ];
    }
}
