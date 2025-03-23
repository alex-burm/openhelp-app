<?php

namespace App\Infrastructure\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ViteExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('vite_asset', [$this, 'viteAsset'], ['is_safe' => ['html']])
        ];
    }

    public function viteAsset(string $entry): string
    {
        if ('dev' === $_ENV['APP_ENV']) {
            return sprintf('<script type="module" src="http://localhost:5177/%s"></script>', $entry);
        }

        return sprintf('<script src="/build/%s.js"></script>', $entry);
    }
}
