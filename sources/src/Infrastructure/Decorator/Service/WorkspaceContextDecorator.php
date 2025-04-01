<?php

namespace App\Infrastructure\Decorator\Service;

use App\Domain\Workspace\Entity\Workspace;
use App\Infrastructure\Service\WorkspaceContext;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\Attribute\AsDecorator;
use Symfony\Component\DependencyInjection\Attribute\When;

#[When(env: 'dev')]
#[AsDecorator(decorates: WorkspaceContext::class)]
class WorkspaceContextDecorator extends WorkspaceContext
{
    public function __construct(
        protected WorkspaceContext $inner,
        protected LoggerInterface $logger,
    ) {
    }

    public function setCurrentWorkspace(Workspace $workspace): static
    {
        $this->logger->info('Method "setCurrentWorkspace" calling');
        $this->inner->setCurrentWorkspace($workspace);
        $this->logger->info('Method "setCurrentWorkspace" called');
        return $this;
    }

    public function getCurrentWorkspace(): Workspace
    {
        $this->logger->info('Method "getCurrentWorkspace" calling');
        $result = $this->inner->getCurrentWorkspace();
        $this->logger->info('Method "getCurrentWorkspace" called');
        return $result;
    }
}
