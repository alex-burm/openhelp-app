<?php

namespace App\Domain\Category\Event;

use App\Domain\Category\Entity\Category;
use App\Domain\Common\Event\EventInterface;

readonly class CategoryUpdated implements EventInterface
{
    public function __construct(
        public Category $category
    ) {
    }
}
