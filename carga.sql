CREATE DATABASE IF NOT EXISTS dbConsulta;

USE dbConsulta;

CREATE TABLE IF NOT EXISTS usuarios (
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO usuarios (nome, email) VALUES 
('Ricardo Vieira', 'ricardo@gmail.com'), 
('Felipe Oliveira', 'felipe@gmail.com'),
('Maricely Andrade', 'maricely@gmail.com');
