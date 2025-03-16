<?php

namespace App\Infrastructure\Presentation\CLI\Command;

use App\Application\Ticket\Service\EmailTicketSource;
use App\Application\Ticket\Service\TicketCreateService;
use App\Domain\Mail\Incoming\Service\MailFetcherInterface;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Mail\Imap\ImapMailFetcher;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Psr\Log\LoggerInterface;

#[AsCommand('app:check-mail-tickets')]
class CheckMailTicketsCommand extends Command
{
    public function __construct(
        protected WorkspaceContext $workspaceContext,
        protected TicketCreateService $ticketCreateService,
        protected MailFetcherInterface $mailFetcher,
        protected WorkspaceRepositoryInterface $workspaceRepository,
        protected LoggerInterface $logger,
    ) {
        parent::__construct();
    }

    public function execute(InputInterface $input, OutputInterface $output): int
    {
        $offset = 0;
        $limit = $input->hasOption('limit') ? $input->getOption('limit') : 10;

        $this->logger->info('Checking mail tickets...');
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
        foreach ($workspaces as $workspace) {
            $this->workspaceContext->setCurrentWorkspace($workspace);

            $this->logger->info(\sprintf('Checking workspace: %s', $workspace->getName()));

            $config = $workspace->getMailSettings();
            if (false === $config) {
                $this->logger->info(\sprintf('No mail settings for workspace: %s', $workspace->getName()));
                continue;
            }

            /**
             * hardcoded to test connection, will be stored in database next time
             */
            $fetcher = new ImapMailFetcher(
                host: 'imap.gmail.com',
                port: 993,
                username: '',
                password: '',
            );
            $source = new EmailTicketSource($fetcher);
            while ($event = $this->ticketCreateService->createTicket($source)) {
                $this->logger->info(\sprintf('Creating ticket from email: %s', $event->user->getEmail()));
            }
        }
    }
}
