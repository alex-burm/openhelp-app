<?php

namespace App\Infrastructure\Persistence\Doctrine\Repository;

use App\Domain\Settings\Collection\SettingsCollection;
use App\Domain\Settings\Entity\Settings;
use App\Domain\Settings\Repository\SettingsRepositoryInterface;
use App\Domain\Settings\ValueObject\SettingName;
use App\Infrastructure\Persistence\Doctrine\Entity\DoctrineSettings;
use App\Infrastructure\Persistence\Doctrine\Mapper\DoctrineSettingsMapper;
use Doctrine\ORM\EntityManagerInterface;

class DoctrineSettingsRepository implements SettingsRepositoryInterface
{
    use DoctrineRepositoryTrait;

    const DOCTRINE_CLASS_NAME = DoctrineSettings::class;

    public function __construct(
        protected EntityManagerInterface $entityManager,
        protected DoctrineSettingsMapper $mapper,
    ) {
    }

    public function get(SettingName $name): ?Settings
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('s')
            ->from(DoctrineSettings::class, 's')
            ->where('s.name = :name')
            ->setParameter(':name', $name);

        $doctrineObject = $qb
            ->getQuery()
            ->setMaxResults(1)
            ->getOneOrNullResult();

        return $this->getOneOrNothing($doctrineObject);
    }

    public function getAll(): SettingsCollection
    {
        $qb = $this->entityManager->createQueryBuilder()
            ->select('s')
            ->from(DoctrineSettings::class, 's');

        $settings = $qb
            ->getQuery()
            ->getResult();

        return new SettingsCollection(\array_map(fn ($x) => $this->getOneOrNothing($x), $settings));
    }

    public function save(Settings $settings): void
    {
        $this->entityManager->persist($settings);
        $this->entityManager->flush();
    }

    public function delete(Settings $settings): void
    {
        $this->_delete($settings);
        $this->entityManager->remove($settings);
        $this->entityManager->flush();
    }
}
