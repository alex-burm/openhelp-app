<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Workspace\Entity\Workspace;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineWorkspace;

readonly final class DoctrineWorkspaceMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = Workspace::class;
    const DOCTRINE_CLASS_NAME = DoctrineWorkspace::class;
}
