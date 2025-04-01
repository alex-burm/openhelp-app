<?php


namespace App\Infrastructure\Common\Encryptor\Bidirectional;

use App\Domain\Common\Encryptor\BidirectionalEncryptorInterface;
use App\Domain\Common\Encryptor\BidirectionalKeypair;
use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\HttpKernel\KernelInterface;

final class BidirectionalSodiumEncryptor implements EncryptorInterface, BidirectionalEncryptorInterface
{
    private string $secretsDir;

    private ?string $privateKey = null;

    private ?string $publicKey = null;

    private ?string $remotePublicKey = null;

    public function __construct(
        private readonly WorkspaceContext $workspaceContext,
        private readonly KernelInterface $kernel,
    ) {
        $this->secretsDir = $this->kernel->getProjectDir() . '/var/secrets/sodium-keypair';
        \file_exists($this->secretsDir) || \mkdir($this->secretsDir, 0777, true);
    }

    public function setPrivateKey(string $value): BidirectionalEncryptorInterface
    {
        $this->privateKey = $value;
        return $this;
    }

    public function setPublicKey(string $value): BidirectionalEncryptorInterface
    {
        $this->publicKey = $value;
        return $this;
    }

    public function getPrivateKey(): string
    {
        return $this->privateKey;
    }

    public function getPublicKey(): string
    {
        return $this->publicKey;
    }

    public function setRemotePublicKey(string $value): BidirectionalEncryptorInterface
    {
        $this->remotePublicKey = $value;
        return $this;
    }

    public function storeLocalKeys(): BidirectionalEncryptorInterface
    {
        $workspaceId = $this->workspaceContext->getCurrentWorkspace()->getId();

        \file_put_contents($this->secretsDir . '/' . $workspaceId . '.public.key', $this->publicKey);
        \file_put_contents($this->secretsDir . '/' . $workspaceId . '.private.key', $this->privateKey);

        return $this;
    }

    private function loadLocalKeys(int $workspaceId): void
    {
        if (false === \is_null($this->privateKey) && false === \is_null($this->publicKey)) {
            return;
        }

        if (false === \file_exists($this->secretsDir . '/' . $workspaceId . '.private.key')
            || false === \file_exists($this->secretsDir . '/' . $workspaceId . '.public.key')
        ) {
            $keypair = $this->generateKeyPair();

            $this->publicKey = $keypair->publicKey;
            $this->privateKey = $keypair->privateKey;

            $this->storeLocalKeys();
        }

        $this->publicKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.public.key');
        $this->privateKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.private.key');
    }

    public function encrypt(string $value): string
    {
        $this->loadLocalKeys($this->workspaceContext->getCurrentWorkspace()->getId());

        $keypair = \sodium_crypto_box_keypair_from_secretkey_and_publickey($this->privateKey, $this->remotePublicKey);
        $nonce = \random_bytes(SODIUM_CRYPTO_BOX_NONCEBYTES);
        $encrypted = sodium_crypto_box($value, $nonce, $keypair);

        return \base64_encode($nonce . $encrypted);
    }

    public function decrypt(string $value): ?string
    {
        $this->loadLocalKeys($this->workspaceContext->getCurrentWorkspace()->getId());

        $keypair = \sodium_crypto_box_keypair_from_secretkey_and_publickey($this->privateKey, $this->remotePublicKey);

        $cipherText = \base64_decode($value);
        $nonce = \substr($cipherText, 0, SODIUM_CRYPTO_BOX_NONCEBYTES);
        $encrypted = \substr($cipherText, SODIUM_CRYPTO_BOX_NONCEBYTES);

        return \sodium_crypto_box_open($encrypted, $nonce, $keypair);
    }

    public function generateKeyPair(): BidirectionalKeypair
    {
        $keyPair = \sodium_crypto_box_keypair();
        $publicKey = \sodium_crypto_box_publickey($keyPair);
        $privateKey = \sodium_crypto_box_secretkey($keyPair);

        return new BidirectionalKeypair($publicKey, $privateKey);
    }
}
