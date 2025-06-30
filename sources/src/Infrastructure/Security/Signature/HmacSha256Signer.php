<?php

namespace App\Infrastructure\Security\Signature;

use App\Domain\Signature\SignerInterface;

final class HmacSha256Signer implements SignerInterface
{
    public function __construct(
        private ?string $secret = null
    ) {
        $this->secret ??= $_ENV['SECRET'];
    }

    public function sign(string $payload): string
    {
        return \base64_encode(\hash_hmac('sha256', $payload, $this->secret, true));
    }

    public function verify(string $payload, string $signature): bool
    {
        $expected = $this->sign($payload);
        return \hash_equals($expected, $signature);
    }
}
