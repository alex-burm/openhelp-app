<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Article\Dto\ArticleQueryDto;
use App\Application\Article\Service\ArticlePublicSearchService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class DefaultController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('public/default/index.html.twig');
    }
}
