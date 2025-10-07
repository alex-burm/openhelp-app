<?php

namespace App\Domain\Search\ValueObject;

enum SearchIndex: string
{
    case PUBLIC_ARTICLES = 'public_articles';

    case MANAGER_GLOBAL = 'manager_global';
}
