<?php

namespace App\Infrastructure\Presentation\Web\Controller\Public;

use App\Application\User\Service\UserRegisterService;
use App\Application\User\Dto\UserRegisterDto;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class RegisterController extends AbstractController
{
    #[Route('/register', name: 'register', methods: ['GET'])]
    public function register(
        Request $request,
        UserRegisterService $registerUserService,
        EventDispatcherInterface $eventDispatcher,
    ): Response
    {
        // = json_decode($request->getContent(), true);
        // = $form->getData()
        $data = [
            'login' => 'test',
            'password' => 'test',
            'name' => 'test',
            'email' => 'test',
        ];

        $registerUserService(new UserRegisterDto(...$data));

        return new Response('User registered. Please check your email.', Response::HTTP_CREATED);
    }
}
