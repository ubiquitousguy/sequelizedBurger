CREATE DATABASE IF NOT EXISTS `sequelizeBurgers_db`;
USE `sequelizeBurgers_db`;

CREATE TABLE `burgers` (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN default false,
	`date` TIMESTAMP,
	PRIMARY KEY ( `id` ) );
