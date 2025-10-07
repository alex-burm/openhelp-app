<?php

namespace App\Domain\Search\ValueObject;

enum SearchEntityType: string
{
    case USER = 'user';

    case ARTICLE = 'article';

    case REQUEST = 'request';
}
