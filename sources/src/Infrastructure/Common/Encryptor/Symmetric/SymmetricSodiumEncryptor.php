<?php

namespace App\Infrastructure\Common\Encryptor\Symmetric;

use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;

final class SymmetricSodiumEncryptor implements EncryptorInterface
{
    public function __construct(
        private readonly string $secret = '',
        private readonly WorkspaceContext $workspaceContext,
    ) {
    }

    private function getKey(): string
    {
        $rawKey = $this->secret . $this->workspaceContext->getCurrentWorkspace()->getToken();
        return \sodium_crypto_generichash($rawKey, '', SODIUM_CRYPTO_SECRETBOX_KEYBYTES);
    }

    public function encrypt(string $value): string
    {
        $key = $this->getKey();
        $nonce = \random_bytes(SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        return \base64_encode($nonce . '.' . \sodium_crypto_secretbox($value, $nonce, $key));
    }

    public function decrypt(string $value): ?string
    {
        $key = $this->getKey();
        $decodedValue = \base64_decode($value);

        $nonce = \substr($decodedValue, 0, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES);
        $ciphertext = \substr($decodedValue, SODIUM_CRYPTO_SECRETBOX_NONCEBYTES + 1);
        return \sodium_crypto_secretbox_open($ciphertext, $nonce, $key) ?: null;
    }
}
