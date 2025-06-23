<?php

namespace App\Infrastructure\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class HelperExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('unique', \uniqid(...))
        ];
    }
}
