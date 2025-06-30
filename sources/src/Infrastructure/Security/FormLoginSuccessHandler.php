<?php

namespace App\Infrastructure\Security;

use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationSuccessHandlerInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class FormLoginSuccessHandler implements AuthenticationSuccessHandlerInterface
{
    public function __construct(
        protected RouterInterface $router,
        protected DoctrineUserMapper $doctrineUserMapper
    ) {
    }

    public function onAuthenticationSuccess(Request $request, TokenInterface $token): RedirectResponse
    {
        $currentUser = $token->getUser();
        $domainUser = $currentUser->getDomainUser();
        $doctrineUser = $this->doctrineUserMapper->toDoctrine($domainUser);

        $this->router->getContext()->setParameter('workspace', $doctrineUser->getWorkspace()->getCode());

        return new RedirectResponse(match (true) {
            $currentUser->isManager() => $this->router->generate('manager_default_index'),
            $currentUser->isCustomer() => throw new \Exception('not implemented yet'),
            default => $this->router->generate('home')
        });
    }
}
