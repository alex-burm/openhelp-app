<?php

namespace App\Domain\Mail\Type;

use App\Domain\Mail\MailMessageInterface;

class RegisterUserMailType extends AbstractMailType implements MailMessageInterface
{
    protected ?string $template = 'register';

    public function getSubject(): string
    {
        return 'Welcome aboard!';
    }
}
