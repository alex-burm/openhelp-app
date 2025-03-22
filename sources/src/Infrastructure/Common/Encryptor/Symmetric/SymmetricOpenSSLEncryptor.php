<?php

namespace App\Infrastructure\Common\Encryptor\Symmetric;

use App\Domain\Common\Encryptor\EncryptorInterface;
use App\Infrastructure\Service\WorkspaceContext;

final class SymmetricOpenSSLEncryptor implements EncryptorInterface
{
    private string $cipher = 'aes-256-cbc';

    public function __construct(
        private readonly string $secret = '',
        private readonly WorkspaceContext $workspaceContext,
    ) {
    }

    private function getKey(): string
    {
        return $this->secret . $this->workspaceContext->getCurrentWorkspace()->getToken();
    }

    public function encrypt(string $value): string
    {
        $passphrase = $this->getKey();
        $vector = \random_bytes(16);
        $encrypted = \openssl_encrypt($value, $this->cipher, $passphrase, \OPENSSL_RAW_DATA, $vector);
        return \base64_encode($vector . '.' . $encrypted);
    }

    public function decrypt(string $value): ?string
    {
        $passphrase = $this->getKey();
        $decodedValue = \base64_decode($value);
        $vector = \substr($decodedValue, 0, 16);
        $cipherText = \substr($decodedValue, 17);

        return \openssl_decrypt($cipherText, $this->cipher, $passphrase, \OPENSSL_RAW_DATA, $vector);
    }
}
