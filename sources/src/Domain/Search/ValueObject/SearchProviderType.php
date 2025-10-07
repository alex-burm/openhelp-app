<?php

namespace App\Domain\Search\ValueObject;

enum SearchProviderType: string
{
    case SUGGEST = 'suggest';

    case FULLTEXT = 'fulltext';
}
