DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(40),
    last_name VARCHAR(50),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(40),
    /* is there a way to accept decimal and int */
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
);

ALTER TABLE employee
ADD CONSTRAINT role_id
  FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
ADD CONSTRAINT manager_id
  FOREIGN KEY (manager_id)
    REFERENCES employee (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION;

ALTER TABLE role
ADD CONSTRAINT department_id
  FOREIGN KEY (department_id)
    REFERENCES department (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);