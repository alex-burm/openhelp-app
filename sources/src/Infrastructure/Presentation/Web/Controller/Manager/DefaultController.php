<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

#[AsController]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'manager_index')]
    public function index(): Response
    {
        return $this->render('manager/default/index.html.twig');
    }
}
