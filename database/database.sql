-- Creat Database Script
CREATE DATABASE typescriptApi;

-- Create Table Script
CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

-- Insert Data Script
INSERT INTO users (name, email) 
  VALUES ('John Doe', 'John@example.com'),
         ('Jane Doe', 'Jane@example.com');
          