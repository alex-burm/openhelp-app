<?php

namespace App\Domain\Common\Encryptor;

interface BidirectionalEncryptorInterface
{
    public function getPrivateKey(): string;

    public function setPrivateKey(string $value): BidirectionalEncryptorInterface;

    public function getPublicKey(): string;

    public function setPublicKey(string $value): BidirectionalEncryptorInterface;

    public function setRemotePublicKey(string $value): BidirectionalEncryptorInterface;

    public function generateKeyPair(): BidirectionalKeypair;

    public function storeLocalKeys(): BidirectionalEncryptorInterface;
}
