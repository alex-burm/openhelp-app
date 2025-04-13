<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250406213526 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE message ADD COLUMN type SMALLINT NOT NULL DEFAULT 0 AFTER text');
        $this->addSql('ALTER TABLE message ADD COLUMN client_id VARCHAR(50) AFTER user_id');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE message DROP COLUMN type');
        $this->addSql('ALTER TABLE message DROP COLUMN client_id');
    }
}
