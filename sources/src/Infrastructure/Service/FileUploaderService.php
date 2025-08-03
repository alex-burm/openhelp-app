<?php

namespace App\Infrastructure\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

readonly class FileUploaderService
{
    public function __construct(
        private SluggerInterface $slugger,
        private WorkspaceContext $workspaceContext,
        private string           $uploadsPath
    ) {
    }

    public function upload(UploadedFile $file): string
    {
        if (!$file->isValid()) {
            throw new FileException($file->getErrorMessage());
        }

        $workspaceCode = $this->workspaceContext->getCurrentWorkspace()->getCode();
        $destination = $this->uploadsPath . '/' . $workspaceCode;

        $originalFilename = pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME);
        $safeFilename = $this->slugger->slug($originalFilename);
        $newFilename = $safeFilename . '-' . uniqid() . '.' . $file->guessExtension();

        $file->move($destination, $newFilename);

        return '/uploads/' . $workspaceCode . '/' . $newFilename;
    }
}
