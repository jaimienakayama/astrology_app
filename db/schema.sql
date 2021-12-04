DROP DATABASE IF EXISTS astrology;

CREATE DATABASE IF NOT EXISTS astrology;

USE astrology;

CREATE TABLE emails (
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  PRIMARY KEY(id),
  UNIQUE KEY(email)
)