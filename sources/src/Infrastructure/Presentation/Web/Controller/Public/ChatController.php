<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Ticket\Service\Source\FormTicketSource;
use App\Application\Ticket\Service\TicketCreateService;
use App\Infrastructure\Persistence\Redis\TicketRequestLimiterStorage;
use App\Infrastructure\Presentation\Web\Form\CreateTicketForm;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
}
