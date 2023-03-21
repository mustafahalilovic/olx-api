
CREATE TABLE articles(
    id SERIAL NOT NULL PRIMARY KEY,
    type_id INT,
    user_id INT,
    location VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    available BOOLEAN NOT NULL,
    picture VARCHAR(100) NOT NULL,
    description VARCHAR(255),
    properties JSON,
    CONSTRAINT fk_type_id
        FOREIGN KEY(type_id)
        REFERENCES types(id),
    CONSTRAINT fk_user_id
        FOREIGN KEY(user_id)
        REFERENCES users(id) 
);