<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Ticket\Service\Source\FormTicketSource;
use App\Application\Ticket\Service\TicketCreateService;
use App\Infrastructure\Persistence\Redis\TicketRequestLimiterStorage;
use App\Infrastructure\Presentation\Web\Form\CreateTicketForm;
use Firebase\JWT\JWT;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Uid\Uuid;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'chat_index', methods: ['GET'])]
    public function form(): Response
    {
        return $this->render('public/chat/index.html.twig');
    }

    #[Route('/chat/token', name: 'chat_token', methods: ['GET'])]
    public function token(): Response
    {
        $secret = $_ENV['CENTRIFUGO_TOKEN_HMAC_SECRET_KEY'];
        $payload = [
            'sub' => 'user123',
            'exp' => time() + 3600,
            'iat' => time(),
            'channels' => ['user#123'],
        ];

        return new JsonResponse([
            'token' => JWT::encode($payload, $secret, 'HS256'),
        ]);
    }

    #[Route('/chat/send', name: 'chat_send', methods: ['POST'])]
    public function send(
        Request $request,
        HttpClientInterface $client
    ): Response {
        $payload = $request->getPayload();

        $message = [
            'serverId' => Uuid::v7()->toRfc4122(),
            'clientId' => $payload->get('clientId'),
            'text' => $payload->get('text'),
            'direction' => $payload->get('direction', 'outgoing'),
            'datetime' => $payload->get('datetime', (new \DateTime())->format('Y-m-d H:i:s')),
        ];

        if (\strlen($message['text'] ?? '') === 0) {
            return $this->json([], Response::HTTP_BAD_REQUEST);
        }

        $response = $client->request('POST', $_ENV['CENTRIFUGO_HOST'] . '/api/publish', [
            'headers' => [
                'Authorization' => 'apikey ' . $_ENV['CENTRIFUGO_API_KEY'],
                'Content-Type' => 'application/json',
            ],
            'json' => [
                'channel' => 'user#123',
                'message' => $message,
            ],
        ]);

        if ($response->getStatusCode() !== Response::HTTP_OK) {
            return $this->json([], Response::HTTP_BAD_REQUEST);
        }

        if ($message['text'] === 'error') {
            return $this->json([], Response::HTTP_BAD_REQUEST);
        }


        if ($message['text'] === 'sleep') {
            sleep(5);
        }

        return $this->json([
            'message' => $message,
        ]);
    }
}
