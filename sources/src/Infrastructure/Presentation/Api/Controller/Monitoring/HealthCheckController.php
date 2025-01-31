<?php

namespace App\Infrastructure\Presentation\Api\Controller\Monitoring;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class HealthCheckController
{
    #[Route('/health-check', name: 'api_health-check', methods: ['GET'])]
    public function healthCheck(): JsonResponse
    {
        return new JsonResponse([
            'status' => 'OK',
            'timestamp' => (new \DateTimeImmutable())->format(\DateTime::RFC3339)
        ]);
    }
}
