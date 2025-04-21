<?php

namespace App\Infrastructure\Presentation\Web\Request;

use App\Infrastructure\Validation\Iso8601DateTime;
use Symfony\Component\Validator\Constraints as Assert;

class PublishMessageInput
{
    #[Assert\NotBlank]
    #[Assert\Uuid]
    public string $id;

    #[Assert\NotBlank]
    #[Assert\Uuid]
    public string $channel;

    #[Assert\NotBlank]
    #[Assert\Length(min: 1, max: 1000)]
    public string $text;

    #[Assert\NotBlank]
    #[Iso8601DateTime]
    public string $datetime;
}
