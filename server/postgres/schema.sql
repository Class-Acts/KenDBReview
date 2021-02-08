
DROP DATABASE IF EXISTS sdc;
CREATE DATABASE sdc;
\c sdc;

DROP TABLE IF EXISTS products;
CREATE TABLE products (
id                serial PRIMARY KEY,
department        TEXT,
product_category  TEXT,
brand             TEXT,
product_name      TEXT,
description       TEXT,
price             numeric(7,2),
review            numeric(2,1),
photo_url         TEXT
);

DROP TABLE IF EXISTS features;
CREATE TABLE features (
id                serial PRIMARY KEY,
product_id        integer,
feature           TEXT
);

DROP TABLE IF EXISTS sizes;
CREATE TABLE sizes (
product_id        serial PRIMARY KEY,
usMens            numeric(3,1),
usWomens          numeric(3,1),
uk                numeric(3,1),
eu                numeric(3,1),
mondo             numeric(3,1),
footLength        numeric(4,2)
);

DROP TABLE IF EXISTS bought_together;
CREATE TABLE bought_together (
id                serial PRIMARY KEY,
department        TEXT,
product_id        integer,
bought_together   integer
);
