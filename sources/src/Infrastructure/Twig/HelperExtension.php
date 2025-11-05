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
            new TwigFilter('json_decode', \json_decode(...)),
            new TwigFilter('highlight', [$this, 'highlight'], ['is_safe' => ['html']]),
        ];
    }

    public function highlight(string $text, string $keyword, string $replacement): string
    {
        if (\strlen($keyword) === 0) {
            return $text;
        }

        $words = \array_filter(\explode(' ', $keyword));
        foreach ($words as $word) {
            $pattern = '/' . \preg_quote($word, '/') . '/i';
            $text = \preg_replace($pattern, $replacement, $text);
        }
        return $text;
    }
}
