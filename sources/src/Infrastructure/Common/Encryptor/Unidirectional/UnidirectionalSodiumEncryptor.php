<?php


namespace App\Infrastructure\Common\Encryptor\Unidirectional;

use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\HttpKernel\KernelInterface;

final class UnidirectionalSodiumEncryptor implements EncryptorInterface
{
    private string $secretsDir;

    private ?string $privateKey = null;

    private ?string $publicKey = null;

    public function __construct(
        private readonly WorkspaceContext $workspaceContext,
        private readonly KernelInterface $kernel,
    ) {
        $this->secretsDir = $this->kernel->getProjectDir() . '/var/secrets/sodium-seal';
        \file_exists($this->secretsDir) || \mkdir($this->secretsDir, 0777, true);
    }

    private function loadFiles(int $workspaceId): void
    {
        if (false === \file_exists($this->secretsDir . '/' . $workspaceId . '.private.key')
        || false === \file_exists($this->secretsDir . '/' . $workspaceId . '.public.key')
        ) {
            $keyPair = \sodium_crypto_box_keypair();
            $publicKey = \sodium_crypto_box_publickey($keyPair);
            $privateKey = \sodium_crypto_box_secretkey($keyPair);

            \file_put_contents($this->secretsDir . '/' . $workspaceId . '.public.key', $publicKey);
            \file_put_contents($this->secretsDir . '/' . $workspaceId . '.private.key', $privateKey);
        }

        $this->publicKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.public.key');
        $this->privateKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.private.key');
    }

    public function encrypt(string $value): string
    {
        $this->loadFiles($this->workspaceContext->getCurrentWorkspace()->getId());

        return \base64_encode(\sodium_crypto_box_seal($value, $this->publicKey));
    }

    public function decrypt(string $value): ?string
    {
        $this->loadFiles($this->workspaceContext->getCurrentWorkspace()->getId());

        $keypair = \sodium_crypto_box_keypair_from_secretkey_and_publickey($this->privateKey, $this->publicKey);
        return \sodium_crypto_box_seal_open(\base64_decode($value), $keypair);
    }
}
