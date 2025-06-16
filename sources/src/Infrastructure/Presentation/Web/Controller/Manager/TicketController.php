<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Infrastructure\Persistence\Doctrine\Repository\DoctrineTicketRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\UX\TwigComponent\ComponentRendererInterface;

#[AsController]
#[Route('/ticket')]
class TicketController extends AbstractController
{
    #[Route('/{ticketId}', name: 'manager_ticket_index', defaults: ['ticketId' => null])]
    public function index(): Response
    {
        return $this->render('manager/ticket/index.html.twig');
    }

    #[Route('/autocomplete/agents', name: 'autocomplete_fragment_route')]
    public function agentDropdown(Request $request): Response
    {
        return $this->json([
            '2' => 'Alex',
            '3' => 'Admin',
            '6' => 'Alexander Burmistrov',
        ]);
    }
}
