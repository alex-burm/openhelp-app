<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250319201403 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE workspace ADD COLUMN token VARCHAR(32) DEFAULT NULL AFTER code');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE workspace DROP COLUMN token');
    }
}
