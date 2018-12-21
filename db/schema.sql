DROP DATABASE IF EXISTS hotels;

CREATE DATABASE hotels;

USE hotels;

CREATE TABLE Image (
  `id` INT AUTO_INCREMENT,
  `hotel_id` INT NOT NULL,
  `title` VARCHAR(100),
  `url` VARCHAR(255),
  `author` VARCHAR(40),
  `date` VARCHAR(40),
  `category` VARCHAR(20),
  PRIMARY KEY (id)
);

CREATE TABLE Hotel (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(50),
  `address` VARCHAR(100),
  `city` VARCHAR(25),
  `state` VARCHAR(4),
  `average_rating` DECIMAL(1, 1),
  `ranking` INT,
  `phone` VARCHAR(20),
  `website` VARCHAR(70),
  PRIMARY KEY (id)
);

