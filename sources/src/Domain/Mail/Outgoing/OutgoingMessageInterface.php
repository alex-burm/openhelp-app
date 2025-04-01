<?php

namespace App\Domain\Mail\Outgoing;

interface OutgoingMessageInterface
{
    public function getTo(): string;

    public function getSubject(): string;

    public function getTemplateName(): string;

    public function getTemplateData(): array;
}
