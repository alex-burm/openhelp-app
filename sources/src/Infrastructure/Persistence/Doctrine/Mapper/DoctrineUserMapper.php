<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\User\Entity\User;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineUser;

readonly final class DoctrineUserMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = User::class;
    const DOCTRINE_CLASS_NAME = DoctrineUser::class;
}
