<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController
{
    #[Route('/', name: 'app_manager_home')]
    public function index(): Response
    {
        return new Response('Hello, manager! Here is a dashboard.');
    }
}
