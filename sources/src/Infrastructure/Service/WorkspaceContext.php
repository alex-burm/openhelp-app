<?php

namespace App\Infrastructure\Service;

use App\Domain\Workspace\Entity\NullWorkspace;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class WorkspaceContext
{
    protected ?Workspace $workspace = null;

    public function __construct(
        protected WorkspaceRepositoryInterface $workspaceRepository,
        protected RequestStack                 $requestStack
    ) {
    }

    public function setCurrentWorkspace(Workspace $workspace): static
    {
        $this->workspace = $workspace;
        return $this;
    }

    public function getCurrentWorkspace(): Workspace
    {
        if (false === \is_null($this->workspace)) {
            return $this->workspace;
        }

        $resolvers = [
            'resolveWorkspaceFromDomain',
            'resolveWorkspaceFromQuery',
            'resolveWorkspaceFromSession',
        ];

        foreach ($resolvers as $resolver) {
            try {
                $this->$resolver();
                if (false === \is_null($this->workspace)) {
                    return $this->workspace;
                }
            } catch (\RuntimeException $e) {
            }
        }

        return new NullWorkspace;
    }

    private function resolveWorkspaceFromSession(): void
    {
        $request = $this->internalRequest ?? $this->requestStack->getCurrentRequest();
        if (\is_null($request)) {
            throw new \RuntimeException('No active request found.');
        }

        $code = $request->getSession()->get('workspace');
        if (\is_null($code)) {
            throw new \RuntimeException('No workspace found in session.');
        }

        $workspace = $this->workspaceRepository->findOneByCode($code);
        if (\is_null($workspace)) {
            throw new \RuntimeException(\sprintf('Workspace not found for "code": %d', $code));
        }

        $this->workspace = $workspace;
    }

    private function resolveWorkspaceFromQuery(): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (\is_null($request)) {
            throw new \RuntimeException('No active request found.');
        }

        $code = $request->attributes->get('code');
        if (\is_null($code)) {
            return ;
        }
        $workspace = $this->workspaceRepository->findOneByCode($code);

        if (\is_null($workspace)) {
            throw new \RuntimeException(\sprintf('Workspace not found for code: %s', $code));
        }

        $this->workspace = $workspace;
    }

    private function resolveWorkspaceFromDomain(): void
    {
        $request = $this->requestStack->getCurrentRequest();
        if (\is_null($request)) {
            throw new \RuntimeException('No active request found.');
        }

        $code = \explode('.', $request->getHost())[0];
        $workspace = $this->workspaceRepository->findOneByCode($code);

        if (\is_null($workspace)) {
            throw new \RuntimeException(\sprintf('Workspace not found for domain: %s', $code));
        }

        $this->workspace = $workspace;
    }
}
