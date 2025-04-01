<?php

namespace App\Application\Ticket\Service;

use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Ticket\Entity\Ticket;
use App\Domain\Ticket\Event\TicketCreated;
use App\Domain\Ticket\Repository\TicketRepositoryInterface;
use App\Domain\Ticket\Service\TicketSourceInterface;
use App\Domain\User\Entity\User;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\ValueObject\Role;
use App\Domain\User\ValueObject\RoleCollection;

class TicketCreateService
{
    public function __construct(
        protected TicketRepositoryInterface $ticketRepository,
        protected UserRepositoryInterface   $userRepository,
        protected EventDispatcherInterface  $eventDispatcher
    ) {
    }

    public function createTicket(TicketSourceInterface $source): ?TicketCreated
    {
        $data = $source->getNextTicketDraft();
        if (\is_null($data)) {
            return null;
        }

        $user = $this->userRepository->findOneByEmail($data->userEmail);
        if (\is_null($user)) {
            $user = new User(
                name: $data->userName,
                email: $data->userEmail,
                roles: new RoleCollection([Role::USER]),
            );
            $this->userRepository->save($user);
        }

        $ticket = new Ticket(
            title: $data->ticketTitle,
            message: $data->ticketMessage,
            customerId: $user->getId(),
        );

        $this->ticketRepository->save($ticket);

        return $this->eventDispatcher->dispatch(
            new TicketCreated(
                ticket: $ticket,
                user: $user,
            )
        );
    }
}
