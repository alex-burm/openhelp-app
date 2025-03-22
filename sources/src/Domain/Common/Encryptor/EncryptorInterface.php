<?php

namespace App\Domain\Common\Encryptor;

interface EncryptorInterface
{
    public function encrypt(string $value): string;

    public function decrypt(string $value): ?string;
}
