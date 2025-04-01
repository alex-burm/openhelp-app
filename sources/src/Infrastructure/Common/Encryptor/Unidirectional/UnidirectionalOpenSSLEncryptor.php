<?php

namespace App\Infrastructure\Common\Encryptor\Unidirectional;

use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;
use Symfony\Component\HttpKernel\KernelInterface;

final class UnidirectionalOpenSSLEncryptor implements EncryptorInterface
{
    private array $config = [
        'digest_alg' => 'sha256',
        'private_key_bits' => 2048,
        'private_key_type' => \OPENSSL_KEYTYPE_RSA,
    ];

    private string $secretsDir;

    private ?string $privateKey = null;

    private ?string $publicKey = null;

    public function __construct(
        private readonly WorkspaceContext $workspaceContext,
        private readonly KernelInterface $kernel,
    ) {
        $this->secretsDir = $this->kernel->getProjectDir() . '/var/secrets/openssl';
        \file_exists($this->secretsDir) || \mkdir($this->secretsDir, 0777, true);
    }

    private function loadFiles(int $workspaceId): void
    {
        if (false === \file_exists($this->secretsDir . '/' . $workspaceId . '.private.key')
            || false === \file_exists($this->secretsDir . '/' . $workspaceId . '.public.key')
        ) {
            $privateKey = \openssl_pkey_new($this->config);
            $csr = \openssl_csr_new([
                "commonName" => "UserID:XXX | Expiration:2025-01-01"
            ], $privateKey, $this->config);

            $expireDays = 365;
            $cert = \openssl_csr_sign($csr, null, $privateKey, $expireDays, $this->config);

            \openssl_pkey_export($privateKey, $privateKeyOut);
            \openssl_x509_export($cert, $certOut);

            \file_put_contents($this->secretsDir . '/' . $workspaceId . '.public.key', $certOut);
            \file_put_contents($this->secretsDir . '/' . $workspaceId . '.private.key', $privateKeyOut);
        }

        $this->publicKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.public.key');
        $this->privateKey = \file_get_contents($this->secretsDir . '/' . $workspaceId . '.private.key');
    }

    public function encrypt(string $value): string
    {
        $this->loadFiles($this->workspaceContext->getCurrentWorkspace()->getId());

        \openssl_public_encrypt($value, $encrypted, \openssl_pkey_get_public($this->publicKey));
        return \base64_encode($encrypted);
    }

    public function decrypt(string $value): ?string
    {
        $this->loadFiles($this->workspaceContext->getCurrentWorkspace()->getId());

        $encryptedMessage = \base64_decode($value);
        \openssl_private_decrypt($encryptedMessage, $decrypted, \openssl_pkey_get_private($this->privateKey));
        return $decrypted;
    }
}
