<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Application\Article\Dto\ArticleSaveDto;
use App\Application\Article\Dto\ArticleTogglePublicationDto;
use App\Application\Article\Service\ArticleCreateOrGetService;
use App\Application\Article\Service\ArticleGetService;
use App\Application\Article\Service\ArticleSaveService;
use App\Application\Article\Service\ArticleTogglePublicationService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
        $createService($id);

        return $this->redirectToRoute('manager_article_edit', ['id' => $id]);
    }

    #[Route('/edit/{id}', name: 'manager_article_edit')]
    public function edit(
        Request                   $request,
        ArticleSaveService        $saveService,
        ArticleGetService         $editingService,
        CsrfTokenManagerInterface $csrfTokenService,
    ): Response {
        $id = $request->attributes->get('id');

        $csrfTokenKey = 'editor_autosave_' . $id;
        if ($request->isMethod(Request::METHOD_POST)) {
            $payload = $request->getPayload();
            $isValidToken = $csrfTokenService->isTokenValid(
                new CsrfToken($csrfTokenKey, $payload->get('_token')),
            );

            if (false === $isValidToken) {
                return $this->json(
                    ['error' => 'Invalid CSRF token'],
                    Response::HTTP_BAD_REQUEST,
                );
            }

            $saveService(new ArticleSaveDto(
                id: $id,
                title: $payload->get('title'),
                content: $payload->get('content'),
            ));

            return $this->json(true);
        }

        $articleDto = $editingService($id);
        return $this->render('manager/article/edit.html.twig', [
            'csrf_token' => $csrfTokenService->getToken($csrfTokenKey)->getValue(),
            'article' => $articleDto,
        ]);
    }

    #[Route('/status/{id}', name: 'manager_article_status', methods: ['POST'])]
    public function status(
        Request $request,
        ArticleTogglePublicationService $publicationService,
        CsrfTokenManagerInterface $csrfTokenService,
    ): Response {
        $id = $request->attributes->get('id');

        $csrfTokenKey = 'editor_autosave_' . $id;
        $payload = $request->getPayload();
        $isValidToken = $csrfTokenService->isTokenValid(
            new CsrfToken($csrfTokenKey, $payload->get('_token')),
        );

        if (false === $isValidToken) {
            return $this->json(
                ['error' => 'Invalid CSRF token'],
                Response::HTTP_BAD_REQUEST,
            );
        }

        $statusDto = $publicationService(new ArticleTogglePublicationDto(
            id: $id,
            publish: $request->request->getBoolean('publish'),
        ));

        return $this->json([
            'published' => $statusDto->published
        ]);
    }
}
