<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Domain\Ticket\ValueObject\TicketStatus;
use App\Infrastructure\Persistence\Doctrine\Repository\DoctrineTicketRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

#[AsController]
#[Route('/ticket')]
class TicketController extends AbstractController
{
    #[Route('/', name: 'manager_ticket_index')]
    public function index(DoctrineTicketRepository $repository): Response
    {
        $list = $repository->findByStatus(TicketStatus::NEW);
        return $this->render('manager/ticket/index.html.twig', [
            'ticketsWithUser' => $list,
        ]);
    }
}
