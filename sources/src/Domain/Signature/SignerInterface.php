<?php

namespace App\Domain\Signature;

interface SignerInterface
{
    public function sign(string $payload): string;

    public function verify(string $payload, string $signature): bool;
}
