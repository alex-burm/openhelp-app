<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\Category\Service\CreateDefaultCategoriesService;
use App\Application\User\Dto\InviteUsersDto;
use App\Application\User\Dto\UserWithWorkspaceRegisterDto;
use App\Application\User\Service\RegistrationEmailConfirmationService;
use App\Application\User\Service\EmailInvitationService;
use App\Application\User\Service\UserRegisterService;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Infrastructure\Presentation\Web\Form\InviteEmailsForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationEmailForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationUserForm;
use App\Infrastructure\Presentation\Web\Form\RegistrationWorkspaceForm;
use App\Infrastructure\Security\CurrentUser;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'register')]
    public function index(
        Request                              $request,
        RegistrationEmailConfirmationService $emailConfirmationService,
    ): Response {
        $form = $this->createForm(RegistrationEmailForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $email = $form->getData()['email'];
            $emailConfirmationService->send($email);

            $request->getSession()->set('registration.email', $email);
            return $this->redirectToRoute('register_check');
        }

        return $this->render('public/register/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/register/check', name: 'register_check')]
    public function check(
        Request $request,
    ): Response {
        $email = $request->getSession()->get('registration.email');
        if (\strlen($email ?? '') === 0) {
            return $this->redirectToRoute('register');
        }

        return $this->render('public/register/check.html.twig', [
            'email' => $email,
            'resendUrl' => $this->generateUrl('register_resend'),
        ]);
    }

    #[Route('/register/resend', name: 'register_resend')]
    public function resend(
        Request                              $request,
        RegistrationEmailConfirmationService $emailConfirmationService,
    ): Response {
        $email = $request->getSession()->get('registration.email');
        if (\strlen($email ?? '') === 0) {
            return $this->redirectToRoute('register');
        }

        $emailConfirmationService->send($email);
        return $this->redirectToRoute('register_check');
    }

    #[Route('/register/user', name: 'register_user')]
    public function user(
        Request                              $request,
        RegistrationEmailConfirmationService $emailConfirmationService,
        UserRepositoryInterface              $userRepository,
    ): Response {
        $email = \base64_decode($request->query->getString('key'));
        $signature = $request->query->getString('signature');
        if (false === $emailConfirmationService->verify($email, $signature)) {
            return $this->redirectToRoute('register');
        }

        $user = $userRepository->findOneByEmail($email);
        if (false === \is_null($user)) {
            return $this->redirectToRoute('login');
        }

        $form = $this->createForm(RegistrationUserForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $request->getSession()->set('registration.data', [
                'email' => $email,
                'name' => $data['name'],
                'password' => $data['password'],
            ]);
            return $this->redirectToRoute('register_workspace');
        }

        return $this->render('public/register/user.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/register/workspace', name: 'register_workspace')]
    public function workspace(
        Request $request,
        UserRegisterService $userRegisterService,
    ): Response {
        $data = $request->getSession()->get('registration.data');
        if (false === \is_array($data)) {
            return $this->redirectToRoute('register');
        }

        $form = $this->createForm(RegistrationWorkspaceForm::class);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $data['workspace'] = $form->getData()['name'];

            $event = $userRegisterService(new UserWithWorkspaceRegisterDto(...$data));
            $request->getSession()->set('workspace', $event->workspace->getId());
            $request->getSession()->set('user', $event->user->getId());

            return $this->redirectToRoute('register_team');
        }
        return $this->render('public/register/workspace.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/register/team', name: 'register_team')]
    public function team(
        Request $request,
        EmailInvitationService $invitationService,
    ): Response {
        $data  = new InviteUsersDto([
            '', '', ''
        ]);
        $form = $this->createForm(InviteEmailsForm::class, $data);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $invitationService->invite($data);
            return $this->redirectToRoute('register_success');
        }

        return $this->render('public/register/team.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    #[Route('/register/success', name: 'register_success')]
    public function success(
        Request $request,
        Security $security,
        UserRepositoryInterface $userRepository,
    ): Response {
        $userId = $request->getSession()->get('user');
        if (\strlen($userId ?? '') === 0) {
            return $this->redirectToRoute('login');
        }

        $request->getSession()->remove('registration.email');
        $request->getSession()->remove('registration.data');
        $request->getSession()->remove('registration.data');

        $user = $userRepository->findOneById($userId);
        $security->login(new CurrentUser($user));

        return $this->render('public/register/success.html.twig');
    }
}
