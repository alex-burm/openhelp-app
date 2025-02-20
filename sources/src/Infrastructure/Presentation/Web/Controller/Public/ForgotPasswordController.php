<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\User\Dto\PasswordChangeRequestDto;
use App\Application\User\Dto\PasswordResetRequestDto;
use App\Application\User\Dto\PasswordResetTokenDto;
use App\Application\User\Service\PasswordResetService;
use App\Infrastructure\Presentation\Web\Form\ChangePasswordForm;
use App\Infrastructure\Presentation\Web\Form\ForgotPasswordForm;
use App\Infrastructure\Presentation\Web\Form\ForgotPasswordTokenForm;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Constraints\PasswordStrengthValidator;

class ForgotPasswordController extends AbstractController
{
    #[Route('/forgot-password', name: 'forgot-password')]
    public function index(
        Request $request,
        EventDispatcherInterface $eventDispatcher,
        PasswordResetService $resetService,
    ): Response {
        $form = $this->createForm(ForgotPasswordForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->getData()['email'];
            $event = $resetService->forgotPassword(
                new PasswordResetRequestDto($email)
            );

            if (false === \is_null($event)) {
                $eventDispatcher->dispatch($event);
            }

            $signature = \hash_hmac('sha256', $email, $_ENV['APP_SECRET']);
            return $this->redirectToRoute('forgot-password-token', [
                'key' => \base64_encode($email),
                'signature' => $signature,
            ]);
        }

        return $this->render('public/forgot/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/forgot-password/token', name: 'forgot-password-token')]
    public function token(
        Request $request,
        PasswordResetService $resetService,
    ): Response {
        $form = $this->createForm(ForgotPasswordTokenForm::class, $request->query->all(), [
            'method' => Request::METHOD_GET,
        ]);
        $form->handleRequest($request);

        $hasTokenError = false;
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $email = \base64_decode($data['key']);
            $token = $data['token'];

            if ($resetService->validateToken(new PasswordResetTokenDto($email, $token))) {
                $request->getSession()->set('reset_password_email', $email);
                return $this->redirectToRoute('forgot-password-change');
            }

            $hasTokenError = true;
        }

        return $this->render('public/forgot/token.html.twig', [
            'form' => $form->createView(),
            'hasTokenError' => $hasTokenError,
        ]);
    }

    #[Route('/forgot-password/change', name: 'forgot-password-change')]
    public function change(
        Request $request,
        PasswordResetService $resetService,
    ): Response {
        $email = $request->getSession()->get('reset_password_email');
        if (null === $email) {
            throw $this->createNotFoundException();
        }

        $form = $this->createForm(ChangePasswordForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $password = $form->get('password')->getData();
            $resetService->changePassword(new PasswordChangeRequestDto($email, $password));

            $request->getSession()->remove('reset_password_email');
            $this->addFlash('success', 'Password successfully changed.');
            return $this->redirectToRoute('login');
        }

        return $this->render('public/forgot/change.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/estimate-strength', name: 'forgot-password-estimate', methods: ['POST'])]
    public function estimateStrength(Request $request): JsonResponse
    {
        $email = $request->getSession()->get('reset_password_email');
        if (null === $email) {
            throw $this->createNotFoundException();
        }
        return new JsonResponse([
            'value' => PasswordStrengthValidator::estimateStrength(
                $request->getPayload()->get('password', '')
            )
        ]);
    }
}
