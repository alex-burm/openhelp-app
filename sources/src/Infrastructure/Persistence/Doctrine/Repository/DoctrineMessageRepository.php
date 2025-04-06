<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\Messaging\Entity\Message;
use App\Domain\Messaging\Repository\MessageRepositoryInterface;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineMessage;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineMessageMapper;
use Doctrine\ORM\EntityManagerInterface;

class DoctrineMessageRepository implements MessageRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineMessage::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineMessageMapper $mapper,
    ) {
    }

    public function save(Message $message): void
    {
        $this->_save($message);
    }
}
