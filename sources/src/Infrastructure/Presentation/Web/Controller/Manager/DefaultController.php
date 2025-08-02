<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;

#[AsController]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'manager_default_index')]
    public function index(): Response
    {
        return $this->render('manager/default/index.html.twig');
    }

    #[Route('/upload-file', name: 'manager_default_file')]
    public function status(Request $request): Response
    {

        return $this->render('manager/article/edit.html.twig');
    }
}
