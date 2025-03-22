<?php

namespace App\Domain\Common\Encryptor;

final readonly class BidirectionalKeypair
{
    public function __construct(
        public string $publicKey,
        public string $privateKey,
    ) {
    }
}
