DROP DATABASE IF EXISTS BAMAZON;
CREATE DATABASE BAMAZON;
USE BAMAZON;

CREATE TABLE PRODUCTS
(
    ITEM_ID INTEGER
    AUTO_INCREMENT NOT NULL,
PRODUCT_NAME VARCHAR
    (50) NOT NULL,
DEPARTMENT_NAME VARCHAR
    (50) NOT NULL,
PRICE DECIMAL
    (10,4) NOT NULL, 
STOCK_QUANTITY INTEGER
    (10) NOT NULL,
PRIMARY KEY
    (ITEM_ID)
);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("NIKE REACT", "SHOES", 159.99, 20);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("SAMSUNG UHD 60 INCH", "ELECTRONICS", 899.99, 10);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("NBA 2K20 PS4", "VIDEO GAMES", 59.99, 50);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("BEATS BY DRE", "ELECTRONICS", 300.00, 25);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("MACBOOK PRO i7", "COMPUTERS", 2200, 12);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("AVENGERS:ENDGAME BLU RAY", "MOVIES", 39.99, 28);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("BABY WIPES", "HOME GOODS", 19.99, 60);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("BRAUN SHAVER", "PERSONAL CARE", 150.00, 42);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("ADIDAS ULTRABOOST", "SHOES", 179.99, 30);

    INSERT INTO PRODUCTS
        (PRODUCT_NAME, DEPARTMENT_NAME, PRICE, STOCK_QUANTITY)
    VALUES
        ("LOGIGTECH WIRELESS KEYBOARD", "COMPUTERS", 89.99, 60);

    SELECT *
    FROM PRODUCTS;