<?php

namespace App\Domain\Mail\Outgoing\Type;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;

class RegisterUserMailType extends AbstractMailType implements OutgoingMessageInterface
{
    protected ?string $template = 'register';

    public function getSubject(): string
    {
        return 'Welcome aboard!';
    }
}
