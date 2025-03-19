<?php

namespace App\Domain\Common\Encryptor;

interface EncryptorInterface
{
    public function encrypt(string $plaintext): string;

    public function decrypt(string $ciphertext): ?string;
}
