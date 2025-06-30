<?php

namespace App\Infrastructure\Presentation\Web\Component;

use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent]
class UserAutocompleteComponent
{
    use DefaultActionTrait;

    public string $parentElementQuery = '';
}
