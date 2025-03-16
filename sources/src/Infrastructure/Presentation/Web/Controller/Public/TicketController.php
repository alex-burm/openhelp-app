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

class TicketController extends AbstractController
{
    #[Route('/request', name: 'ticket_form', methods: ['GET', 'POST'])]
    public function form(
        Request $request,
        TicketCreateService $ticketCreateService,
        TicketRequestLimiterStorage $rateLimiter,
    ): Response
    {
        $form = $this->createForm(CreateTicketForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            if (false === $rateLimiter->consume($request->getClientIp())->isAccepted()) {
                $this->addFlash('error', 'Too many requests. Try again later.');
                return $this->redirectToRoute('ticket_form');
            }

            $event = $ticketCreateService->createTicket(new FormTicketSource(...$form->getData()));

            $request->getSession()->set('ticket.id', $event->ticket->getId()->toString());
            $request->getSession()->set('ticket.user.email', $event->user->getEmail());
            return $this->redirectToRoute('ticket_success');
        }

        return $this->render('public/ticket/form.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/success', name: 'ticket_success', methods: ['GET'])]
    public function success(
        Request $request,
    ): Response {
        $ticketId = $request->getSession()->get('ticket.id');
        $email = $request->getSession()->get('ticket.user.email');
        if (\is_null($ticketId) || \is_null($email)) {
            return $this->redirectToRoute('home');
        }

        return $this->render('public/ticket/success.html.twig', [
            'ticketId' => $ticketId,
            'email' => $email,
        ]);
    }
}
