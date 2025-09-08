<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use App\Domain\Category\ValueObject\DefaultCategoryEnum;
use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;
use Symfony\Component\Uid\Uuid;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250831225012 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('
            CREATE TABLE IF NOT EXISTS `category` (
              `id` binary(16) NOT NULL,
              `space_id` int unsigned NOT NULL,
              `name` TEXT NOT NULL,
              PRIMARY KEY (`id`),
              KEY `category_space_id_fk` (`space_id`),
              CONSTRAINT `category_space_id_fk` FOREIGN KEY (`space_id`) REFERENCES `workspace` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
        ');

        $this->addSql('ALTER TABLE article ADD COLUMN category_id BINARY(16) NULL AFTER space_id');
        $this->addSql('ALTER TABLE article
            add constraint article_category_id_fk
                foreign key (category_id) references category (id)
                    on update cascade on delete set null
        ');

        $list = $this->connection->prepare('SELECT id FROM workspace')->executeQuery()->fetchFirstColumn();
        foreach ($list as $workspaceId) {
            foreach (DefaultCategoryEnum::cases() as $defaultCategory) {
                $this->addSql('INSERT INTO category (id, space_id, name) VALUES (?, ?, ?)', [
                    Uuid::v7()->toBinary(),
                    $workspaceId,
                    $defaultCategory->value,
                ]);
            }
        }
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE article DROP FOREIGN KEY article_category_id_fk');
        $this->addSql('ALTER TABLE article DROP COLUMN category_id');
        $this->addSql('DROP TABLE IF EXISTS `category`');
    }
}
