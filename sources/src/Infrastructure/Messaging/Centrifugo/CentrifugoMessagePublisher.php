<?php

namespace App\Infrastructure\Messaging\Centrifugo;

use App\Application\Messaging\Dto\MessageViewDto;
use App\Application\Messaging\Service\MessagePublisherInterface;
use App\Application\Normalization\DtoNormalizerRegistry;
use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\ValueObject\MessageDirection;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CentrifugoMessagePublisher implements MessagePublisherInterface
{
    public function __construct(
        protected DtoNormalizerRegistry $normalizer,
        protected HttpClientInterface $client,
        protected Security $security,
        protected string $apiUrl,
        protected string $apiKey
    ) {}

    public function publish(Message $message): void
    {
        $this->client->request('POST', $this->apiUrl . '/api/publish', [
            'headers' => [
                'Authorization' => 'apikey ' . $this->apiKey,
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'channel' => $message->getTicketId()->toRfc4122(),
                'data' => $this->normalizer->normalize(
                    new MessageViewDto(
                        serverId: $message->getId()->toRfc4122(),
                        clientId: $message->getClientId(),
                        text: $message->getText(),
                        type: $message->getType()->value,
                        direction: MessageDirection::fromIsAuthor(
                            $message->getUserId() === $this->security->getUser()?->getId()
                        )->value,
                        datetime: $message->getSentAt(),
                    ))
            ],
        ]);
    }
}
