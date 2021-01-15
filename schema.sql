USE rgi;
CREATE TABLE products (
  id int auto_increment primary key,
  brand text,
  name text,
  rating int,
  price int,
  description text,
  photoURL text
);

CREATE TABLE features (
  id int auto_increment primary key,
  feature text,
  prod_id int,
  foreign key(prod_id) references products(id)
);
