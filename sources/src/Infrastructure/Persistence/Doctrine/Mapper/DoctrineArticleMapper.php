<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Entity\Article;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineArticle;

readonly final class DoctrineArticleMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = Article::class;
    const DOCTRINE_CLASS_NAME = DoctrineArticle::class;
}
