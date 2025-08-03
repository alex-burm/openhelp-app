<?php

namespace App\Infrastructure\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class HelperExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('unique', \uniqid(...))
        ];
    }

    public function getFilters(): array
    {
        return [
            new TwigFilter('json_decode', \json_decode(...))
        ];
    }
}
