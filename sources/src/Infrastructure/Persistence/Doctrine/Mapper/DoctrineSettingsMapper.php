<?php

namespace App\Infrastructure\Persistence\Doctrine\Mapper;

use App\Domain\Settings\Entity\Settings;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineSettings;

readonly final class DoctrineSettingsMapper extends AbstractDoctrineMapper
{
    const DOMAIN_CLASS_NAME = Settings::class;
    const DOCTRINE_CLASS_NAME = DoctrineSettings::class;
}
