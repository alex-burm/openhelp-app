<?php

namespace App\Infrastructure\Presentation\Web\Controller\Manager;

use App\Application\Search\Dto\SearchQuery;
use App\Application\Search\Service\AdminSuggestSearchService;
use App\Domain\Search\ValueObject\SearchIndex;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Attribute\Route;
use App\Infrastructure\Service\FileUploaderService;

#[AsController]
class DefaultController extends AbstractController
{
    #[Route('/', name: 'manager_default_index')]
    public function index(): Response
    {
        return $this->render('manager/default/index.html.twig');
    }

    #[Route('/upload-file', name: 'manager_default_upload_file', methods: ['POST'])]
    public function uploadFile(Request $request, FileUploaderService $fileUploader): Response
    {
        $file = $request->files->get('file');

        if (\is_null($file)) {
            return $this->json(
                ['error' => 'No file uploaded'],
                Response::HTTP_BAD_REQUEST
            );
        }

        try {
            $filePath = $fileUploader->upload($file);
        } catch (\Exception $e) {
            return $this->json(
                ['error' => 'Failed to upload file: ' . $e->getMessage()],
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }

        return $this->json([
            'url' => $filePath
        ]);
    }

    #[Route('/search', name: 'manager_default_search', methods: ['GET'])]
    public function search(Request $request, AdminSuggestSearchService $searchService): Response
    {
        $result = $searchService($request->query->get('q'));
        return $this->json($result);
    }
}
