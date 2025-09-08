<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Category\Entity\Category;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineCategory;

readonly final class DoctrineCategoryMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = Category::class;
    const DOCTRINE_CLASS_NAME = DoctrineCategory::class;
}
