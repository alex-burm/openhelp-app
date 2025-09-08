<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Application\Category\Dto\CategoryGetService;
use App\Application\Category\Dto\CategorySaveDto;
use App\Application\Category\Service\CategoryDeleteService;
use App\Application\Category\Service\CategoryListService;
use App\Application\Category\Service\CategorySaveService;
use App\Domain\Category\Entity\Category;
use App\Infrastructure\Presentation\Web\Form\CategoryForm;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Csrf\CsrfToken;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Component\Uid\Uuid;

#[Route('/category')]
class CategoryController extends AbstractController
{
    #[Route('/', name: 'manager_category_index')]
    public function index(
        Request $request,
        CategoryListService $listService,
    ): Response {
        $result = $listService();

        if ($request->isXmlHttpRequest()) {
            if (\count($result->all()) === 0) {
                return $this->render('manager/category/partials/empty.html.twig');
            }

            return $this->render('manager/category/partials/list.html.twig', [
                'list' => $result,
            ]);
        }

        return $this->render('manager/category/index.html.twig', [
            'list' => $result,
        ]);
    }

    #[Route('/manage/{id}', name: 'manager_category_manage', defaults: ['id' => null], methods: ['GET', 'POST'])]
    public function manage(
        Request $request,
        CategoryGetService $getService,
        CategorySaveService $saveService,
    ): Response
    {
        $id = $request->attributes->get('id');

        $category = $id ? $getService(Uuid::fromString($id)) : new Category();

        $form = $this->createForm(CategoryForm::class, [
            'id' => $category?->getId(),
            'name' => $category?->getName(),
        ]);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $saveService(new CategorySaveDto(...$form->getData()));
            return $this->redirectToRoute('manager_category_index');
        }

        return $this->render('manager/category/modal/manage.html.twig', [
            'category' => $category,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/delete/{id}', name: 'manager_category_delete', methods: ['GET', 'DELETE'])]
    public function delete(
        Request $request,
        CategoryGetService $getService,
        CategoryDeleteService $deleteService,
        CsrfTokenManagerInterface $csrfTokenService,
    ): Response {
        $id = $request->attributes->get('id');
        $category = $getService($id);

        if ($request->isMethod(Request::METHOD_GET)) {
            return $this->render('manager/category/modal/delete.html.twig', [
                'category' => $category,
            ]);
        }

        $token = $request->headers->get('X-CSRF-TOKEN');

        $isValidToken = $csrfTokenService->isTokenValid(
            new CsrfToken('category_delete-' . $id, $token),
        );

        if (false === $isValidToken) {
            return $this->json(
                ['error' => 'Invalid CSRF token'],
                Response::HTTP_BAD_REQUEST,
            );
        }

        $deleteService(Uuid::fromString($id));
        return $this->redirectToRoute('manager_category_index');
    }
}
