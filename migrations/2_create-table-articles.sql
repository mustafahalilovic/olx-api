
CREATE TABLE articles(
    id SERIAL NOT NULL PRIMARY KEY,
    location VARCHAR(50) NOT NULL,
    type VARCHAR(15) NOT NULL,
    price INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    available BOOLEAN NOT NULL,
    picture VARCHAR(100) NOT NULL,
    description TEXT,
    propertys JSON 
);