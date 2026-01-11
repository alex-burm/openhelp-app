<?php

namespace App\Infrastructure\Presentation\Web\Component;

use App\Application\Article\Service\ArticlePopularListService;
use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent]
class PopularArticles
{
    public function __construct(
        protected ArticlePopularListService $popularListService,
    ) {
    }

    public function getItems(): array
    {
        $items = ($this->popularListService)();

        return \array_map(function ($item) {
            $blocks = json_decode($item->content, true)['blocks'] ?? [];
            $blocks = \array_filter($blocks, fn ($block) => \strlen($block['data']['text'] ?? '') > 0);
            $description = \array_map(
                fn ($block) => strip_tags($block['data']['text']),
                \array_slice($blocks, 0, 2),
            );

            return [
                'id' => $item->id,
                'title' => $item->title,
                'category' => $item->categoryName,
                'description' => \trim(\implode(' ', $description)),
            ];
        }, $items);
    }
}
