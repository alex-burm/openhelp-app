<?php

namespace App\Domain\Mail\Type;

use App\Domain\Mail\MailMessageInterface;
use App\Domain\User\ValueObject\ResetPasswordToken;

class ForgotPasswordTokenMailType extends AbstractMailType implements MailMessageInterface
{
    protected ?string $template = 'forgotPassword';

    public function getSubject(): string
    {
        return 'Password reset request';
    }

    public function setToken(ResetPasswordToken $token): static
    {
        $this->data['token'] = $token;
        return $this;
    }

    public function setSignature(string $signature): static
    {
        $this->data['signature'] = $signature;
        return $this;
    }

    public function getTemplateData(): array
    {
        $this->data['key'] = base64_encode($this->data['user']->getEmail());
        return $this->data;
    }
}
