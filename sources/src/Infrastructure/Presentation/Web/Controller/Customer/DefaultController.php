<?php

namespace App\Infrastructure\Presentation\Web\Controller\Customer;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController
{
    #[Route('/', name: 'app_customer_home')]
    public function index(): Response
    {
        return new Response('Hello, customer! Here is a dashboard.');
    }
}
