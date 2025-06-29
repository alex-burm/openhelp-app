<?php

namespace App\Domain\Mail\Outgoing\Type;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;

class InvitationMailTypeRegistration extends RegistrationEmailConfirmationMailType implements OutgoingMessageInterface
{
    protected ?string $template = 'invitationEmail';

    public function getSubject(): string
    {
        return 'You’re invited to join a workspace on OpenHelp! 🎉';
    }
}
