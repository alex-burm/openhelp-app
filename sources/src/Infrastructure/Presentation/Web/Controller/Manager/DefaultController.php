<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

#[AsController]
class DefaultController
{
    #[Route('/', name: 'app_manager_home')]
    public function index(Security $security): Response
    {
        return new Response(
            \sprintf(
                'Hello, {%s} manager! Here is a dashboard.',
                $security->getUser()->getLogin()
            )
        );
    }
}
