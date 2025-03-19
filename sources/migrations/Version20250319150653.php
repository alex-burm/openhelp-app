<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250319150653 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('
            CREATE TABLE IF NOT EXISTS `settings` (
              `space_id` int unsigned NOT NULL,
              `name` varchar(50) NOT NULL,
              `value` varchar(255) DEFAULT NULL,
              `sensitive` tinyint(1) NOT NULL DEFAULT 0,
              PRIMARY KEY (`name`,`space_id`),
              KEY `settings_workspace_id_fk` (`space_id`),
              CONSTRAINT `settings_workspace_id_fk` FOREIGN KEY (`space_id`) REFERENCES `workspace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
        ');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE IF EXISTS `settings`');
    }
}
