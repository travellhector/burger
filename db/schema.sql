-- Created the DB
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY(id)
);
