<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Validator\Constraints\PasswordStrengthValidator;

class SecurityController extends AbstractController
{
    #[Route('/login', name: 'login')]
    public function index(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('public/security/login.html.twig', [
            'lastUsername' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    #[Route('/estimate-strength', name: 'security-password-estimate', methods: ['POST'])]
    public function estimateStrength(Request $request): JsonResponse
    {
        return new JsonResponse([
            'value' => PasswordStrengthValidator::estimateStrength(
                $request->getPayload()->get('password', '')
            )
        ]);
    }
}
