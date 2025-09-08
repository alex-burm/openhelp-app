<?php

namespace App\Infrastructure\Persistence\Doctrine\Listener;

use App\Infrastructure\Service\WorkspaceContext;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;

#[AsEventListener(event: KernelEvents::REQUEST, priority: 100)]
class WorkspaceRequestListener
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected WorkspaceContext $workspaceContext,
        protected RouterInterface $router,
    ) {
    }

    public function __invoke(RequestEvent $event): void
    {
        if (false === $event->isMainRequest()) {
            return;
        }

        $request = $event->getRequest();
        $filters = $this->entityManager->getFilters();
        if (false === \in_array($request->getRequestUri(), ['/login', '/register'])) {
            try {
                $workspace = $this->workspaceContext->getCurrentWorkspace();
            } catch (\Throwable $e) {
                $event->setResponse(new RedirectResponse('/login'));
                return;
            }

            $filter = $filters->enable('workspaceFilter');
            $filter->setParameter('space_id', $workspace->getId());
        } else {
            if ($filters->isEnabled('workspaceFilter')) {
                $filters->disable('workspaceFilter');
            }
        }
    }
}
