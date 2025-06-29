<?php

namespace App\Application\User\Service;

use App\Application\User\Dto\InviteUsersDto;
use App\Application\User\Dto\UserWithWorkspaceRegisterDto;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Mail\Outgoing\Service\MailHandlerInterface;
use App\Domain\Mail\Outgoing\Type\RegistrationEmailConfirmationMailType;
use App\Domain\Mail\Outgoing\Type\InvitationMailTypeRegistration;
use App\Domain\Mail\Outgoing\Type\WelcomeMailType;
use App\Domain\Signature\SignerInterface;
use App\Domain\User\Entity\User;
use App\Domain\User\Event\UserRegisteredEvent;
use App\Domain\User\Repository\UserRepositoryInterface;
use App\Domain\User\Service\PasswordHasher;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;

class EmailInvitationService
{
    public function __construct(
        protected MailHandlerInterface $mailHandler,
        protected SignerInterface $signer,
    ) {
    }

    public function invite(InviteUsersDto $data): void
    {
        $emails = \array_unique(\array_filter($data->emails));
        foreach ($emails as $value) {
            $email = \trim($value ?? '');
            if (\strlen($email) === 0) {
                continue;
            }

            $this->mailHandler->handle(
                (new InvitationMailTypeRegistration($email))
                    ->setSignature($this->signer->sign($email))
            );
        }
    }

    public function confirm(string $email, string $signature): bool
    {
        return $this->signer->verify($email, $signature);
    }
}
