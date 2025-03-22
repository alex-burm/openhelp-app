<?php

namespace App\Infrastructure\Common\Encryptor\Bidirectional;

use App\Domain\Common\Encryptor\BidirectionalEncryptorInterface;
use App\Domain\Common\Encryptor\BidirectionalKeypair;
use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\HttpKernel\KernelInterface;

final class BidirectionalOpenSSLEncryptor implements EncryptorInterface, BidirectionalEncryptorInterface
{
    private array $config = [
        'digest_alg' => 'sha256',
        'private_key_bits' => 2048,
        'private_key_type' => \OPENSSL_KEYTYPE_RSA,
    ];

    private string $secretsDir;

    private ?string $privateKey = null;

    private ?string $publicKey = null;

    private ?string $remotePublicKey = null;

    public function __construct(
        private readonly WorkspaceContext $workspaceContext,
        private readonly KernelInterface $kernel,
    ) {
        $this->secretsDir = $this->kernel->getProjectDir() . '/var/secrets/openssl';
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

    public function generateKeyPair(): BidirectionalKeypair
    {
        $privateKey = \openssl_pkey_new($this->config);
        $csr = \openssl_csr_new([
            'commonName' => 'UserID:XXX | Expiration:2025-01-01'
        ], $privateKey, $this->config);

        $expireDays = 365;
        $cert = \openssl_csr_sign($csr, null, $privateKey, $expireDays, $this->config);

        \openssl_pkey_export($privateKey, $privateKey);
        \openssl_x509_export($cert, $publicKey);

        return new BidirectionalKeypair($publicKey, $privateKey);
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

    public function isPublicKeyValid(): bool
    {
        $info = \openssl_x509_parse($this->publicKey); // validate?
        return \str_contains($info['subject']['CN'], 'Expiration:2025-01-01');
    }

    public function encrypt(string $value): string
    {
        $this->loadLocalKeys($this->workspaceContext->getCurrentWorkspace()->getId());

        \openssl_public_encrypt($value, $encrypted, \openssl_pkey_get_public($this->remotePublicKey));
        \openssl_sign($encrypted, $signature, openssl_pkey_get_private($this->privateKey), \OPENSSL_ALGO_SHA256);

        return \base64_encode($encrypted . '||' . $signature);
    }

    public function decrypt(string $value): ?string
    {
        $this->loadLocalKeys($this->workspaceContext->getCurrentWorkspace()->getId());

        list($encrypted, $signature) = \explode('||', \base64_decode($value), 2);

        $isValid = openssl_verify($encrypted, $signature, \openssl_pkey_get_public($this->remotePublicKey), \OPENSSL_ALGO_SHA256);
        if (1 !== $isValid) {
            throw new \LogicException('The sender\'s signature is invalid');
        }

        \openssl_private_decrypt($encrypted, $decrypted, \openssl_pkey_get_private($this->privateKey));
        return $decrypted;
    }
}
