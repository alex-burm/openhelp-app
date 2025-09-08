<?php

namespace App\Infrastructure\Persistence\Doctrine\Filter;

use App\Infrastructure\Persistence\Doctrine\Entity\WorkspaceAwareEntity;
use Doctrine\ORM\Mapping\ClassMetadata;
use Doctrine\ORM\Query\Filter\SQLFilter;

class WorkspaceFilter extends SQLFilter
{
    public function addFilterConstraint(ClassMetadata $targetEntity, $targetTableAlias): string
    {
        if (false === $targetEntity->reflClass->implementsInterface(WorkspaceAwareEntity::class)) {
            return '';
        }

        return ($targetTableAlias.'.space_id = ' . $this->getParameter('space_id')
            . ' OR ' . $targetTableAlias.'.space_id IS NULL');
    }
}
