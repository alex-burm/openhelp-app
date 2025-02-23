<?php

namespace App\Domain\Mail\Type;

use App\Domain\Mail\MailMessageInterface;
use App\Domain\User\Entity\User;

abstract class AbstractMailType implements MailMessageInterface
{
    protected array $data = [];

    protected ?string $template = null;

    public function __construct(
        protected string $to,
    ) {
    }

    public static function create(User $user): static
    {
        return (new static($user->getEmail()))->setUser($user);
    }

    public function getTo(): string
    {
        return $this->to;
    }

    public function setUser(User $user): static
    {
        $this->data['user'] = $user;
        return $this;
    }

    public function getTemplateData(): array
    {
        return $this->data;
    }

    public function getTemplateName(): string
    {
        return $this->template ?? throw new \LogicException('Template name is not set');
    }

    abstract public function getSubject(): string;
}
