
CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(320) NOT NULL,
    password VARCHAR(15) NOT NULL,
    gender VARCHAR(10),
    region VARCHAR(100) NOT NULL
);