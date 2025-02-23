<?php

namespace App\Domain\Mail;

interface MailMessageInterface
{
    public function getTo(): string;

    public function getSubject(): string;

    public function getTemplateName(): string;

    public function getTemplateData(): array;
}
