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
use Symfony\Component\Routing\Attribute\Route;

class ChatController extends AbstractController
{
    #[Route('/chat', name: 'chat_index', methods: ['GET'])]
    public function form(): Response
    {
        return $this->render('public/chat/index.html.twig');
    }

    #[Route('/chat/token', name: 'chat_token', methods: ['GET'])]
    public function token(LoggerInterface $logger): Response
    {
        $secret = $_ENV['CENTRIFUGO_TOKEN_HMAC_SECRET_KEY'];
        $payload = [
            'sub' => 'user123',
            'exp' => time() + 3600,
            'iat' => time(),
            'channels' => ['user#123'],
        ];

        $logger->info('Token requested');
        return new JsonResponse([
            'token' => JWT::encode($payload, $secret, 'HS256'),
        ]);
    }
}
