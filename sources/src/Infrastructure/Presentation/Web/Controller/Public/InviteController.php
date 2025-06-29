<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\User\Dto\InviteUsersDto;
use App\Application\User\Dto\UserToWorkspaceRegisterDto;
use App\Application\User\Dto\UserWithWorkspaceRegisterDto;
use App\Application\User\Service\InvitationEmailConfirmationService;
use App\Application\User\Service\RegistrationEmailConfirmationService;
use App\Application\User\Service\EmailInvitationService;
use App\Application\User\Service\RegisterToWorkspaceService;
use App\Application\User\Service\UserRegisterService;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineUserMapper;
use App\Infrastructure\Presentation\Web\Form\InviteEmailsForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationEmailForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationUserForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationWorkspaceForm;
use App\Infrastructure\Security\CurrentUser;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/{workspace}/invite')]
class InviteController extends AbstractController
{
    #[Route('/user', name: 'invite_user')]
    public function user(
        Request                              $request,
        RegisterToWorkspaceService           $registerToWorkspaceService,
        RegistrationEmailConfirmationService $emailConfirmationService,
        UserRepositoryInterface              $userRepository,
    ): Response {
        $email = \base64_decode($request->query->getString('key'));
        $signature = $request->query->getString('signature');
        if (false === $emailConfirmationService->verify($email, $signature)) {
            return $this->redirectToRoute('login');
        }

        $user = $userRepository->findOneByEmail($email);
        if (false === \is_null($user)) {
            return $this->redirectToRoute('login');
        }

        $form = $this->createForm(RegistrationUserForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $data['email'] = $email;

            $event = $registerToWorkspaceService(new UserToWorkspaceRegisterDto(...$data));

            // set user-id in session
            $request->getSession()->set('user', $event->user->getId());

            return $this->redirectToRoute('invite_success');
        }

        return $this->render('public/register/user.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/success', name: 'invite_success')]
    public function success(
        Request $request,
        Security $security,
        UserRepositoryInterface $userRepository,
    ): Response {
        $userId = $request->getSession()->get('user');
        if (\strlen($userId ?? '') === 0) {
            return $this->redirectToRoute('login');
        }

        $request->getSession()->remove('user');

        $user = $userRepository->findOneById($userId);
        $security->login(new CurrentUser($user));

        return $this->render('public/register/success.html.twig');
    }

    #[Route('/register', name: 'invite_register')]
    public function register(
        Request $request,
        InvitationEmailConfirmationService $emailConfirmationService
    ): Response {
        $form = $this->createForm(RegistrationEmailForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->getData()['email'];
            $emailConfirmationService->send($email);

            $request->getSession()->set('invitation.email', $email);
            return $this->redirectToRoute('invite_check');
        }

        return $this->render('public/register/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/check', name: 'invite_check')]
    public function check(
        Request $request,
    ): Response {
        $email = $request->getSession()->get('invitation.email');
        if (\strlen($email ?? '') === 0) {
            return $this->redirectToRoute('invite_register');
        }

        return $this->render('public/register/check.html.twig', [
            'email' => $email,
            'resendUrl' => $this->generateUrl('invite_resend'),
        ]);
    }

    #[Route('/resend', name: 'invite_resend')]
    public function resend(
        Request $request,
        InvitationEmailConfirmationService $emailConfirmationService
    ): Response {
        $email = $request->getSession()->get('invitation.email');
        if (\strlen($email ?? '') === 0) {
            return $this->redirectToRoute('invite_register');
        }

        $emailConfirmationService->send($email);
        return $this->redirectToRoute('invite_check');
    }
}
