<?php

namespace App\Infrastructure\Service;

use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepository;
use Symfony\Component\HttpFoundation\RequestStack;

class WorkspaceContext
{
    protected ?Workspace $workspace = null;

    public function __construct(
        protected WorkspaceRepository $workspaceRepository,
        protected RequestStack $requestStack
    ) {
    }

    public function setCurrentWorkspace(Workspace $workspace): static
    {
        $this->workspace = $workspace;
        return $this;
    }

    public function getCurrentWorkspace(): Workspace
    {
        if (\is_null($this->workspace)) {
            $this->resolveWorkspaceFromDomain();
        }

        return $this->workspace;
    }

    private function resolveWorkspaceFromDomain(): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (!$request) {
            throw new \RuntimeException("No active request found.");
        }

        $code = \explode('.', $request->getHost())[0];
        $workspace = $this->workspaceRepository->findOneByCode($code);

        if (\is_null($workspace)) {
            throw new \RuntimeException(sprintf('Workspace not found for domain: %s', $code));
        }

        $this->workspace = $workspace;
    }
}
