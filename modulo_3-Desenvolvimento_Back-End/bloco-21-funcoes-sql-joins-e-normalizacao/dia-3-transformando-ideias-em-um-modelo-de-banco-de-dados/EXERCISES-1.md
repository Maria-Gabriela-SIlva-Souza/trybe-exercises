Exercício 1: Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

* Nome;
* Espécie;
* Sexo;
* Idade;
* Localização.

Cada animal também possui vários cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Crie um banco de dados para isso:

DROP SCHEMA IF EXISTS Zoologico;
	CREATE SCHEMA Zoologico;
	USE Zoologico;

	CREATE TABLE animais(
		animal_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		nome_animal VARCHAR(50) NOT NULL,
		espécie VARCHAR(50) NOT NULL,
        sexo VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        localização VARCHAR(50) NOT NULL
	)ENGINE=InnoDB;
    
	CREATE TABLE gerente(
		gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		nome_gerente VARCHAR(50) NOT NULL
	)ENGINE=InnoDB;
    
	CREATE TABLE cuidadores(
		cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
		nome_cuidador VARCHAR(50) NOT NULL,
        gerente_id INTEGER,
        FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
	)ENGINE=InnoDB;
    
	CREATE TABLE animal_cuidado_por(
		cuidador_id INTEGER,
		animal_id INTEGER,
		CONSTRAINT PRIMARY KEY(cuidador_id, animal_id),
        FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id),
        FOREIGN KEY (animal_id) REFERENCES animais (animal_id)
	)ENGINE=InnoDB;
