<?php

namespace App\Application\Search;

use App\Application\Search\SearchProviderInterface;
use App\Domain\Search\ValueObject\SearchProviderType;

final class SearchProviderLocator
{
    /**
     * @var SearchProviderInterface[]
     */
    private array $providers;

    public function __construct(iterable $providers)
    {
        foreach ($providers as $provider) {
            if (false === ($provider instanceof SearchProviderInterface)) {
                throw new \InvalidArgumentException(\sprintf('Unknown search provider "%s"', \get_class($provider)));
            }
            $this->providers[$provider->getType()->value] = $provider;
        }
    }

    public function lookup(SearchProviderType $type): SearchProviderInterface
    {
        return $this->providers[$type->value]
            ?? throw new \RuntimeException(\sprintf('No search provider for type "%s"', $type->value));
    }
}
