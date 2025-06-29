<?php

namespace App\Domain\Mail\Outgoing\Type;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;

class WelcomeMailType extends AbstractMailType implements OutgoingMessageInterface
{
    protected ?string $template = 'welcome';

    public function getSubject(): string
    {
        return 'Welcome to OpenHelp — let’s get started! 🚀';
    }
}
