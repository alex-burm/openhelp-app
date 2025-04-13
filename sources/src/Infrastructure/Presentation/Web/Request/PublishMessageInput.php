<?php

namespace App\Infrastructure\Presentation\Web\Request;

use Symfony\Component\Validator\Constraints as Assert;

class PublishMessageInput
{
    #[Assert\NotBlank]
    #[Assert\Length(max: 255)]
    public string $channel;

    #[Assert\NotBlank]
    #[Assert\Length(min: 1, max: 1000)]
    public string $content;
}
