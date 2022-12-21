DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;

USE restaurant_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees(
    id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE menu(
    id INT,
    food_item VARCHAR(30) NOT NULL
);

CREATE TABLE item(
 id INT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(40) NOT NULL,
 stock INT,
 price INT, 
 item_id INT
);


-- ALTER TABLE employees
-- ADD CONSTRAINT role_id
--   FOREIGN KEY (role_id)
--     REFERENCES roles(id)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION,
-- ADD CONSTRAINT manager_id
--   FOREIGN KEY (manager_id)
--     REFERENCES employees (id)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION;

-- ALTER TABLE roles
-- ADD CONSTRAINT department_id
--   FOREIGN KEY (department_id)
--     REFERENCES departments (id)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION;

