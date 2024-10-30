create database clinica;

use clinica;
select * from pacientes;
create table pacientes(
id int not null primary key auto_increment,
nome varchar(50) not null,
nascimento date not null,
telefone varchar(50) not null,
endereco varchar(50) not null,
bi varchar(50) not null,
idade int not null,
peso int not null,
imc int not null,
peso float not null,
sexo char not null,
codigo varchar(50) not null);

insert into pacientes values (default,'Mário Silvera','2004-07-12','924256342','Luanda','01234596795LA034','56','M','4512');

create table enfermeiros(
id int not null primary key auto_increment,
nome varchar(50) not null,
nascimento date not null,
especialidade varchar(50) not null,
telefone varchar(50) not null);


create table dadosclinicos(
id int not null primary key auto_increment,
historicoMedico varchar(50) not null,
codicoesSaudeActuais varchar(50) not null,
tipoCirurgiaPlaneada varchar(50) not null,
idPaciente int,
foreign key(idPaciente) references pacientes(id),
idEnfermeiro int,
foreign key(idEnfermeiro) references enfermeiros(id)
);