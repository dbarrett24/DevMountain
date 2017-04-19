CREATE TABLE products
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    description VARCHAR(40),
    price integer,
    imageUrl VARCHAR(200)
)