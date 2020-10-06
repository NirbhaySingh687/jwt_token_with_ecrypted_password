CREATE DATABASE jwt_token;


create extension if not exists "uuid-ossp";//create the extemsion for uuid

\c
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL,
);

//Insert Fake data
INSERT INTO users(user_name,user_email,user_password) values('Steve Smith','smith@gmail.com','user12345');