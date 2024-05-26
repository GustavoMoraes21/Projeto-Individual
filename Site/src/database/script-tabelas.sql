CREATE DATABASE carmeeting;

USE carmeeting;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

select * from usuario;

CREATE TABLE quiz (
	idQuiz int PRIMARY KEY AUTO_INCREMENT,
	fkUsuario int,
	pontuacao float,
    constraint fkusuario foreign key (fkUsuario)
		references usuario(id)
);

select * from quiz;


