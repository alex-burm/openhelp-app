<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return new Response('Hello, world!');
    }
}
