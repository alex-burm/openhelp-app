<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Article\Service\ArticleGetService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/article')]
class ArticleController extends AbstractController
{
    #[Route('/{id}', name: 'article_show', methods: ['GET'])]
    public function show(string $id, ArticleGetService $articleGetService): Response
    {
        $data = $articleGetService($id);
        $data->isPublished || throw $this->createNotFoundException('Article not found.');

        return $this->render('public/article/show.html.twig', [
            'article' => $data,
        ]);
    }
}
