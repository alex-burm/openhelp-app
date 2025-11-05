<?php


namespace App\Infrastructure\Presentation\CLI\Command;

use App\Application\Search\Dto\FullTextGroupItem;
use App\Application\Search\Dto\FullTextPlainItem;
use App\Application\Search\Dto\SuggestItem;
use App\Application\Search\SearchProviderLocator;
use App\Domain\Search\ValueObject\SearchEntityType;
use App\Domain\Search\ValueObject\SearchIndex;
use App\Domain\Search\ValueObject\SearchProviderType;
use App\Domain\Workspace\Entity\Workspace;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Uid\Uuid;

#[AsCommand('app:elastic:public')]
class ElasticPublicCommand extends Command
{
    public function __construct(
        protected LoggerInterface $logger,
        protected WorkspaceRepositoryInterface $workspaceRepository,
        protected WorkspaceContext $workspaceContext,
        protected EntityManagerInterface $entityManager,
        protected SearchProviderLocator $locator,
    ) {
        parent::__construct();
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $offset = 0;
        $limit = $input->hasOption('limit') ? $input->getOption('limit') : 10;

        $this->logger->info('Elastic create index...');

        $this->locator
            ->lookup($this->getProviderType())
            ->withIndex($this->getIndexName())
            ->reset();

        do {
            $workspaces = $this->workspaceRepository->getList($offset, $limit);
            $count = \count($workspaces);

            $this->logger->info(\sprintf('Found %d workspaces', $count));
            $this->processing($workspaces);

            $offset += $limit;
        } while ($count > 0);
        return Command::SUCCESS;
    }

    protected function getIndexName(): SearchIndex
    {
        return SearchIndex::PUBLIC_ARTICLES;
    }

    protected function getProviderType(): SearchProviderType
    {
        return SearchProviderType::GROUP;
    }

    protected function getIndexDtoClassName(): string
    {
        return match ($this->getProviderType()) {
            SearchProviderType::SUGGEST => SuggestItem::class,
            SearchProviderType::FULLTEXT => FullTextPlainItem::class,
            SearchProviderType::GROUP => FullTextGroupItem::class,
        };
    }

    protected function processing($workspaces): void
    {
        $filter = $this->entityManager->getFilters()->enable('workspaceFilter');

        foreach ($workspaces as $workspace) {
            $this->workspaceContext->setCurrentWorkspace($workspace);
            $this->logger->info(\sprintf('Indexing workspace: %s', $workspace->getName()));

            $filter->setParameter('space_id', $workspace->getId());
            $this->addArticles($workspace);
        }
    }

    protected function getAllItems(Workspace $workspace): array
    {
        return $this->entityManager
            ->getConnection()
            ->prepare('
                SELECT
                    article.id,
                    article.title,
                    article.content,
                    category.name as category
                FROM
                    article
                INNER JOIN category ON category.id = article.category_id
                WHERE article.space_id = :spaceId
                AND article.status = 1
            ')
            ->executeQuery([
                ':spaceId' => $workspace->getId(),
            ])
            ->fetchAllAssociative();
    }

    protected function addArticles(Workspace $workspace): void
    {
        $provider = $this->locator
            ->lookup($this->getProviderType())
            ->withIndex($this->getIndexName());

        $articles = $this->getAllItems($workspace);
        $dtoClassName = $this->getIndexDtoClassName();
        foreach ($articles as $article) {

            $blocks = json_decode($article['content'], true)['blocks'] ?? [];
            $blocks = \array_filter($blocks, fn ($x) => \strlen($x['data']['text'] ?? '') > 0);
            $description = \array_map(fn ($x) => strip_tags($x['data']['text']), $blocks);

            if (empty($description)) {
                continue;
            }

            $provider->index(new $dtoClassName(
                id: Uuid::fromBinary($article['id'])->toRfc4122(),
                title: $article['title'],
                category: $article['category'],
                inputs: \array_filter(\array_merge(
                    \explode(' ', $article['title']),
                )),
                meta: [
                    'category' => $article['category'],
                    'description' => $description,
                    'url' => 'https://exampe.com',
                ],
                type: SearchEntityType::ARTICLE,
            ));
        }
    }
}
