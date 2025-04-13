<?php

namespace App\Application\Normalization;

use LogicException;

class DtoNormalizerRegistry
{
    protected array $normalizers = [];

    public function __construct(NormalizerInterface ...$normalizers)
    {
        foreach ($normalizers as $normalizer) {
            $this->addNormalizer($normalizer);
        }
    }

    public function addNormalizer(NormalizerInterface $normalizer): static
    {
        $this->normalizers[] = $normalizer;
        return $this;
    }

    public function normalize(object $dto): array
    {
        foreach ($this->normalizers as $normalizer) {
            if ($normalizer->supports($dto)) {
                return $normalizer->normalize($dto);
            }
        }

        throw new LogicException(sprintf('No normalizer found for %s', \get_class($dto)));
    }
}

