<?php

namespace App\Infrastructure\Service\Http;

use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;

#[AsEventListener(event: KernelEvents::REQUEST, priority: 5)]
final class WorkspaceContextListener
{
    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected RouterInterface $router,
    ) {
    }

    public function __invoke(RequestEvent $event): void
    {
        if (false === $event->isMainRequest()) {
            return;
        }

        $this->router->getContext()->setParameter('workspace', $this->workspaceContext->getCurrentWorkspace()->getCode());
    }
}
