<?php

namespace App\Application\Normalization;

interface NormalizerInterface
{
    public function supports(object $object): bool;

    public function normalize(object $object): array;
}
