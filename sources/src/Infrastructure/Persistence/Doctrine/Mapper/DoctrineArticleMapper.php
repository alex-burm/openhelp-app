<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Article\Entity\Article;
use App\Domain\Article\ValueObject\ArticleStatus;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineArticle;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineCategory;
use Doctrine\ORM\EntityManagerInterface;

readonly final class DoctrineArticleMapper
{
    public function __construct(
        protected EntityManagerInterface $entityManager,
    ) {
    }

    public function toDoctrine(Article $domainObject, ?DoctrineArticle $entity = null): DoctrineArticle
    {
        if (false === \is_null($domainObject->getId())) {
            $entity = $this->entityManager->getReference(DoctrineArticle::class, $domainObject->getId());
        }

        if (null === $entity) {
            $entity = new DoctrineArticle();
        }

        $entity->setId($domainObject->getId());

        if (\is_null($domainObject->getCategoryId())) {
            $entity->setCategory(null);
        } else {
            $entity->setCategory($this->entityManager->getReference(DoctrineCategory::class, $domainObject->getCategoryId()));
        }

        $entity->setTitle($domainObject->getTitle() ?? '');
        $entity->setContent($domainObject->getContent() ?? '');
        $entity->setStatus($domainObject->getStatus()->value);
        $entity->setCreatedAt($domainObject->getCreatedAt());
        $entity->setUpdatedAt($entity->getUpdatedAt() ?? $domainObject->getCreatedAt());

        return $entity;
    }

    public function fromDoctrine(DoctrineArticle $doctrineObject): Article
    {
        $ticket = new Article(
            $doctrineObject->getId(),
            $doctrineObject->getTitle(),
            $doctrineObject->getContent(),
            $doctrineObject->getCategory()?->getId(),
            ArticleStatus::from($doctrineObject->getStatus()),
        );

        $ticket->setCreatedAt($doctrineObject->getCreatedAt());
        return $ticket;
    }
}
