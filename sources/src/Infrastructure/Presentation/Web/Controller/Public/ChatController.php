<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Messaging\Dto\PublishMessageDto;
use App\Application\Messaging\Service\PublishMessageService;
use App\Application\Ticket\Service\Source\ChatTicketSource;
use App\Application\Ticket\Service\TicketCreateService;
use App\Infrastructure\Persistence\Redis\TicketRequestLimiterStorage;
use Firebase\JWT\JWT;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Uid\Uuid;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'chat_index', methods: ['GET'])]
    public function form(): Response
    {
        return $this->render('public/chat/index.html.twig');
    }

    #[Route('/chat/token', name: 'chat_token', methods: ['GET'])]
    public function token(Request $request): Response
    {
        $channel = $request->query->get('channel');

        if (false === Uuid::isValid($channel)) {
            return $this->json([], Response::HTTP_BAD_REQUEST);
        }

        $secret = $_ENV['CENTRIFUGO_TOKEN_HMAC_SECRET_KEY'];
        $payload = [
            //'sub' => 'user123',
            'exp' => time() + 3600,
            'iat' => time(),
            'channels' => [
                $request->query->get('channel'),
            ],
        ];

        return $this->json([
            'token' => JWT::encode($payload, $secret, 'HS256'),
        ]);
    }

    #[Route('/chat/channel', name: 'chat_channel', methods: ['GET'])]
    public function channel(
        Request $request,
        TicketCreateService $ticketCreateService,
        TicketRequestLimiterStorage $rateLimiter,
    ): Response {
        if (false === $rateLimiter->consume($request->getClientIp())->isAccepted()) {
            return $this->json([], Response::HTTP_TOO_MANY_REQUESTS);
        }

        $event = $ticketCreateService->createTicket(new ChatTicketSource());

        return new JsonResponse([
            'channel' => $event->ticket->getId()->toRfc4122()
        ]);
    }

    #[Route('/chat/send', name: 'chat_send', methods: ['POST'])]
    public function send(
        Request $request,
        PublishMessageService $messageService,
    ): Response {
        $data = $request->getPayload()->all();

        $messageService->publish(new PublishMessageDto(...$data));

        return $this->json([], Response::HTTP_OK);
    }
}
