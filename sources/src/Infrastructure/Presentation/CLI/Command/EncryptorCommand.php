<?php


namespace App\Infrastructure\Presentation\CLI\Command;

use App\Domain\Common\Encryptor\BidirectionalEncryptorInterface;
use App\Domain\Common\Encryptor\BidirectionalKeypair;
use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Domain\Workspace\Repository\WorkspaceRepositoryInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\HttpKernel\KernelInterface;

#[AsCommand('app:encryptor')]
class EncryptorCommand extends Command
{
    public function __construct(
        protected KernelInterface $kernel,
        protected WorkspaceContext $context,
        protected WorkspaceRepositoryInterface $workspaceRepository,
        protected EncryptorInterface $encryptor,
        protected string $secret
    ) {
        parent::__construct();
    }

    protected function configure()
    {
        $this->addOption('workspace', 'w', InputOption::VALUE_REQUIRED, 'Workspace id');
        $this->addOption('encrypt', null, InputOption::VALUE_OPTIONAL, 'Encrypt text');
        $this->addOption('decrypt', null, InputOption::VALUE_OPTIONAL, 'Decrypt text');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $workspace = $this->workspaceRepository->findOneById((int)$input->getOption('workspace'));
        $this->context->setCurrentWorkspace($workspace);

        if ($this->encryptor instanceof BidirectionalEncryptorInterface) {
            $this->checkBidirectionalEncryptor($input, $output);
        } else {
            $this->checkUnidirectionalEncryptor($input, $output);
        }

        return 0;
    }

    protected function checkBidirectionalEncryptor(InputInterface $input, OutputInterface $output): void
    {
        $io = new SymfonyStyle($input, $output);
        $io->success($this->encryptor::class);

        $classNamespaces = explode('\\', $this->encryptor::class);
        $prefix = \end($classNamespaces);
        $secretsRemoteDir = $this->kernel->getProjectDir() . '/var/secrets/' . $prefix . '-remote';
        $secretsLocaleDir = $this->kernel->getProjectDir() . '/var/secrets/' . $prefix . '-locale';

        $remoteKeys = $this->createOrGetKeyPair($secretsRemoteDir);
        $localeKeys = $this->createOrGetKeyPair($secretsLocaleDir);

        if (false === \is_null($input->getOption('encrypt'))) {
            $this->encryptor
                ->setPrivateKey($localeKeys->privateKey)
                ->setPublicKey($localeKeys->publicKey)
                ->setRemotePublicKey($remoteKeys->publicKey);

            $io->section('Encrypt');
            $io->writeln($this->encryptor->encrypt($input->getOption('encrypt')));
            $io->writeln('========================================');
        }

        if (false === \is_null($input->getOption('decrypt'))) {
            $this->encryptor
                ->setPrivateKey($remoteKeys->privateKey)
                ->setPublicKey($remoteKeys->publicKey)
                ->setRemotePublicKey($localeKeys->publicKey);

            $io->section('Decrypt');
            $io->writeln($this->encryptor->decrypt($input->getOption('decrypt')) ?? '');
            $io->writeln('========================================');
        }
    }

    protected function createOrGetKeyPair(string $secretsDir): BidirectionalKeypair
    {
        \file_exists($secretsDir) || \mkdir($secretsDir, 0777, true);

        if (false === \file_exists($secretsDir . '/public.pem')
            || false === \file_exists($secretsDir . '/private.pem')
        ) {
            $keys = $this->encryptor->generateKeyPair();
            \file_put_contents($secretsDir . '/public.pem', $keys->publicKey);
            \file_put_contents($secretsDir . '/private.pem', $keys->privateKey);
        }

        return new BidirectionalKeypair(
            \file_get_contents($secretsDir . '/public.pem'),
            \file_get_contents($secretsDir . '/private.pem'),
        );
    }

    protected function checkUnidirectionalEncryptor(InputInterface $input, OutputInterface $output): void
    {
        $io = new SymfonyStyle($input, $output);
        $io->success($this->encryptor::class);

        if (false === \is_null($input->getOption('encrypt'))) {
            $io->section('Encrypt');
            $io->writeln($this->encryptor->encrypt($input->getOption('encrypt')));
            $io->writeln('========================================');
        }

        if (false === \is_null($input->getOption('decrypt'))) {
            $io->section('Decrypt');
            $io->writeln($this->encryptor->decrypt($input->getOption('decrypt')) ?? '');
            $io->writeln('========================================');
        }
    }
}
