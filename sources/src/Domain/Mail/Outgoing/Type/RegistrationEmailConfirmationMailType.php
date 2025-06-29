<?php

namespace App\Domain\Mail\Outgoing\Type;

use App\Domain\Mail\Outgoing\OutgoingMessageInterface;

class RegistrationEmailConfirmationMailType extends AbstractMailType implements OutgoingMessageInterface
{
    protected ?string $template = 'confirmationEmail';

    public function getSubject(): string
    {
        return 'Please confirm your email address';
    }

    public function setSignature(string $signature): static
    {
        $this->data['signature'] = $signature;
        return $this;
    }

    public function getTemplateData(): array
    {
        $this->data['key'] = \base64_encode($this->getTo());
        return $this->data;
    }
}
