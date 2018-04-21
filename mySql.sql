-- Drops the bamazon_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "bamazon_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect bamazon_db --
USE bamazon_db;

-- Creates the table "products" within bamazon_db --
CREATE TABLE products (
  -- Makes an integer column --
  itemID INTEGER(10) AUTO_INCREMENT NOT NULL,
  -- Makes a string column --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a string column --
  department_name VARCHAR(30) NOT NULL,
  -- Makes an integer column --
  price INTEGER(10) NOT NULL,
    -- Makes an integer column --
  stock_quantity INTEGER(10) NOT NULL,
  -- sets itemID as primary key --
  PRIMARY KEY (itemID)
);

-- Creates new rows containing data in all named columns --
INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Sports", 200, 20);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Baseball", "Sports", 40, 50);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Clothes", 25, 75);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Pants", "Clothes", 35, 75);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Cookies", "Food", 10, 100);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Juice", "Food", 5, 100);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Laptop", "Electronics", 800, 30);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("TV", "Electronics", 1000, 50);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Couch", "Furniture", 1500, 10);

INSERT INTO PRODUCTS (product_name, department_name, price, stock_quantity)
VALUES ("Table", "Furniture", 45, 35);
