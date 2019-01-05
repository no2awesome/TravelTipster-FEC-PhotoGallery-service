DROP DATABASE IF EXISTS hotels;

CREATE DATABASE hotels;

USE hotels;

CREATE TABLE Hotel (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT,
  `address` TEXT,
  `city` TEXT,
  `state` TEXT,
  `average_rating` REAL,
  `ranking` INT,
  `phone` TEXT,
  `website` TEXT,
  PRIMARY KEY (id)
);

CREATE TABLE Image (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hotel_id` INT NOT NULL,
  `title` TEXT,
  `url` TEXT,
  `author` TEXT,
  `date` TEXT,
  `category` TEXT,
  PRIMARY KEY (id)
);

ALTER TABLE Image
  ADD FOREIGN KEY (hotel_id) REFERENCES Hotel (id);

