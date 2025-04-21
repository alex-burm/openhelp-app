<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250406164317 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('
            CREATE TABLE IF NOT EXISTS `message` (
              `id` binary(16) NOT NULL,
              `ticket_id` binary(16) NOT NULL,
              `space_id` int unsigned NOT NULL,
              `user_id` int unsigned NULL,
              `text` TEXT NOT NULL,
              `sent_at` datetime NOT NULL,
              `created_at` datetime NOT NULL,
              PRIMARY KEY (`id`),
              KEY `message_space_id_fk` (`space_id`),
              KEY `message_ticket_id_fk` (`ticket_id`),
              KEY `message_user_id_fk` (`user_id`),
              CONSTRAINT `message_space_id_fk` FOREIGN KEY (`space_id`) REFERENCES `workspace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
              CONSTRAINT `message_ticket_id_fk` FOREIGN KEY (`ticket_id`) REFERENCES `ticket` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
              CONSTRAINT `message_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        ');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE IF EXISTS `message`');
    }
}
