<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250309153633 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE ticket ADD COLUMN channel TINYINT UNSIGNED NOT NULL AFTER status');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE ticket DROP COLUMN channel');
    }
}
