<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Application\Article\Dto\ArticleSaveDto;
use App\Application\Article\Service\ArticleCreateOrGetService;
use App\Application\Article\Service\ArticleSaveService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Uid\Uuid;

#[Route('/article')]
class ArticleController extends AbstractController
{
    #[Route('/process/{id}', name: 'manager_article_process', defaults: ['id' => null])]
    public function index(
        ArticleCreateOrGetService $createService,
        ?Uuid $id = null,
    ): Response {
        $article = $createService($id);

        return $this->redirectToRoute('manager_article_edit', ['id' => $article->getId()]);
    }

    #[Route('/edit/{id}', name: 'manager_article_edit')]
    public function edit(
        Request $request,
        ArticleSaveService $saveService,
        CsrfTokenManagerInterface $csrfTokenService,
    ): Response {
        $id = $request->attributes->get('id');

        $csrfTokenKey = 'editor_autosave_' . $id;
        if ($request->isMethod(Request::METHOD_POST)) {
            $isValidToken = $csrfTokenService->isTokenValid(
                new CsrfToken($csrfTokenKey, $request->request->get('_token'))
            );

            if (false === $isValidToken) {
                return new JsonResponse(['error' => 'Invalid CSRF token'], 400);
            }

            $saveService(new ArticleSaveDto(...$request->request->all()));
        }


        return $this->render('manager/article/edit.html.twig', [
            'csrf_token' => $csrfTokenService->getToken($csrfTokenKey)->getValue(),
        ]);
    }

//    #[Route('/status/{id}', name: 'manager_article_status')]
//    public function status(
//        Request $request,
//        ArticleSaveService $saveService,
//    ): Response {
//
//        return $this->render('manager/article/edit.html.twig');
//    }
}
