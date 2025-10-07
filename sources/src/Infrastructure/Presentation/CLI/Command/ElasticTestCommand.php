<?php


namespace App\Infrastructure\Presentation\CLI\Command;

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

#[AsCommand('app:elastic')]
class ElasticTestCommand extends Command
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
            ->lookup(SearchProviderType::SUGGEST)
            ->withIndex(SearchIndex::MANAGER_GLOBAL)
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

    protected function processing($workspaces): void
    {
        $filter = $this->entityManager->getFilters()->enable('workspaceFilter');

        foreach ($workspaces as $workspace) {
            $this->workspaceContext->setCurrentWorkspace($workspace);
            $this->logger->info(\sprintf('Indexing workspace: %s', $workspace->getName()));

            $filter->setParameter('space_id', $workspace->getId());
            $this->addUsersToSuggest($workspace);
            $this->addArticlesToSuggest($workspace);
        }
    }

    protected function addUsersToSuggest(Workspace $workspace): void
    {
        $provider = $this->locator
            ->lookup(SearchProviderType::SUGGEST)
            ->withIndex(SearchIndex::MANAGER_GLOBAL);

        $users = $this->getAllItems('user', $workspace);
        foreach ($users as $user) {
            $provider->index(new SuggestItem(
                id: $user['id'],
                title: $user['name'],
                inputs: \array_filter(\array_merge(
                    \explode(' ', $user['name']),
                    [$user['email']]
                )),
                meta: [
                    'description' => $user['email'],
                    'url' => 'https://exampe.com',
                ],
                type: SearchEntityType::USER,
            ));
        }
    }

    protected function getAllItems(string $table, Workspace $workspace): array
    {
        return $this->entityManager
            ->getConnection()
            ->prepare('SELECT * FROM ' . $table . ' WHERE space_id = ' . $workspace->getId())
            ->executeQuery()
            ->fetchAllAssociative();
    }

    protected function addArticlesToSuggest(Workspace $workspace): void
    {
        $provider = $this->locator
            ->lookup(SearchProviderType::SUGGEST)
            ->withIndex(SearchIndex::MANAGER_GLOBAL);

        $articles = $this->getAllItems('article', $workspace);
        foreach ($articles as $article) {
            $provider->index(new SuggestItem(
                id: Uuid::fromBinary($article['id'])->toRfc4122(),
                title: $article['title'],
                inputs: \array_filter(\array_merge(
                    \explode(' ', $article['title']),
                )),
                meta: [
                    'description' => 'category',
                    'url' => 'https://exampe.com',
                ],
                type: SearchEntityType::ARTICLE,
            ));
        }
    }
}
