<?php


namespace App\Infrastructure\Presentation\CLI\Command;

use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Firebase\JWT\JWT;

#[AsCommand('app:centrifugo')]
class CentrifugoCommand extends Command
{
    public function __construct(
        protected HttpClientInterface $client
    ) {
        parent::__construct();
    }

    protected function configure()
    {
        $this->addOption('token', 't', InputOption::VALUE_NONE, 'Generate token');
        $this->addOption('message', 'm', InputOption::VALUE_REQUIRED, 'Send test message');
        $this->addOption('channel', 'c', InputOption::VALUE_REQUIRED, 'Channel to send message');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        if ($input->getOption('message')) {
            $json = [
                'channel' => $input->getOption('channel') ?? 'user#123',
                'data' => [
                    'text' => $input->getOption('message'),
                ],
            ];
            $response = $this->client->request('POST', $_ENV['CENTRIFUGO_HOST'] . '/api/publish', [
                'headers' => [
                    'Authorization' => 'apikey ' . $_ENV['CENTRIFUGO_API_KEY'],
                    'Content-Type' => 'application/json',
                ],
                'json' => $json,
            ]);

            $output->writeln(sprintf('<info>Message to channel %s: </info> %s', $json['channel'], $json['data']['text']));
        }
        if ($input->getOption('token')) {
            $secret = $_ENV['CENTRIFUGO_TOKEN_HMAC_SECRET_KEY'];
            $payload = [
                //'sub' => 'user123',
                'exp' => time() + 10,
                'iat' => time(),
                'channels' => [$input->getOption('channel') ?? 'user#123'],
            ];

            $jwt = JWT::encode($payload, $secret, 'HS256');
            $output->writeln(sprintf('<info>Token: </info> %s', $jwt));
        }
        return 0;
    }
}
