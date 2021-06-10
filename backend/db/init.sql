GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' IDENTIFIED BY 'secret';
GRANT ALL PRIVILEGES ON *.* TO 'user'@'localhost' IDENTIFIED BY 'secret';
FLUSH PRIVILEGES;

create database if not exists `thanksgiving`;

USE `thanksgiving`;

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `body` text NOT NULL,
  `colour` varchar(56) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT '0' COMMENT '0 = False, >=1 = True',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DELIMITER $$
USE thanksgiving$$
DROP TRIGGER IF EXISTS messages_on_delete_trigger $$
CREATE
    TRIGGER messages_on_delete_trigger BEFORE UPDATE ON messages
    FOR EACH ROW BEGIN
	IF (NEW.deleted_at IS NULL) THEN SET NEW.deleted = 0; ELSE SET NEW.deleted = OLD.id; END IF;
    END;
$$
DELIMITER ;
