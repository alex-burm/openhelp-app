<?php

namespace App\Application\Article\Service;

use App\Application\Article\Dto\ArticleCategoryUpdateDto;
use App\Application\Article\Dto\ArticleQueryDto;
use App\Application\Article\Dto\ArticleStatusDto;
use App\Application\Category\Dto\CategoryGetService;
use App\Domain\Article\Event\ArticleUpdated;
use App\Domain\Article\Repository\ArticleRepositoryInterface;
use App\Domain\Category\Repository\CategoryRepositoryInterface;
use App\Domain\Common\Event\EventDispatcherInterface;
use App\Domain\Search\Aggregate\SearchResponse;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Infrastructure\Persistence\Elastic\SearchProvider\FullTextSearchGroupProvider;
use Symfony\Component\Uid\Uuid;

class ArticlePublicSearchService
{
    public function __construct(
        protected FullTextSearchGroupProvider $searchProvider,
    ) {
    }

    public function __invoke(ArticleQueryDto $dto): SearchResponse
    {
        return $this->searchProvider
            ->withIndex(SearchIndex::PUBLIC_ARTICLES)
            ->search($dto->query);
    }
}
