<?php

namespace App\Infrastructure\Messaging\Centrifugo;

use App\Application\Messaging\Service\MessagePublisherInterface;
use App\Domain\Messaging\Entity\Message;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class CentrifugoMessagePublisher implements MessagePublisherInterface
{
    public function __construct(
        protected HttpClientInterface $client,
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
                'message' => $message->getText(),
            ],
        ]);
    }
}
