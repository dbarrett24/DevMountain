CREATE TABLE products
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(60),
  description TEXT,
  price INTEGER,
  imageUrl VARCHAR(255)
);