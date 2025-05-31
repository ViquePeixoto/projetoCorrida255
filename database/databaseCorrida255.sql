-- Modelagem em script do banco de dados 'corrida255'.
CREATE DATABASE corrida255;
USE corrida255;

CREATE TABLE tabelaVeiculo (
idVeiculo INT PRIMARY KEY AUTO_INCREMENT,
nomeVeiculo VARCHAR(50),
tipoVeiculo VARCHAR(9),
rodaVeiculo VARCHAR(10),
estiloVeiculo VARCHAR(50),
    CONSTRAINT checkTipoVeiculo CHECK (tipoVeiculo IN ('Skate', 'Bicicleta', 'Patins', 'Patinete', 'Trike')),
    CONSTRAINT checkRoda CHECK (rodaVeiculo IN ('Drifter', 'Roadrunner')),
    CONSTRAINT checkEstilo CHECK (estiloVeiculo IN (
        -- Opções para 'skate':
        'Twin Tip', 'Pintail', 'Drop Through', 'Freestyle', 'LDP', 'Downhill', 'Longboard', 'Shortboard', 'Popsicle', 'Old School', 'Mini Cruiser', 'Surfskate',

        -- Opções para 'bicicleta':
        'Mountain', 'BMX', 'Time Trial', 'Track', 'Recumbent', 'Cyclocross', 'Hybrid', 'Road',

        -- Opções para 'patins':
        'Lifestyle', 'Park', 'Vintage', 'Jam', 'Derby',

        -- Opções para 'patinete':
        'Kick', 'Off-Road', 'Three Wheel', 'Folding',

        -- Opções para 'trike':
        'Cargo', 'Recumbent', 'Tadpole', 'Delta', 'Drift', 'Rickshaw',

        -- Estilos secretos encontrados na barra rolante como easter eggs:
        'Hatsune Miku', 'Cube Land', 'Racionais', 'Bansky', 'Creepypasta' ))
);



CREATE TABLE tabelaEquipe (
idEquipe INT PRIMARY KEY AUTO_INCREMENT,
nomeEquipe VARCHAR(50),
descricaoEquipe VARCHAR(50)
);


CREATE TABLE tabelaUsuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(50),
emailUsuario VARCHAR(50),
senhaUsuario VARCHAR(50),
fotoDePerfil VARCHAR(100),
vitorias INT,
fkVeiculo INT UNIQUE,
	FOREIGN KEY (fkVeiculo) REFERENCES tabelaVeiculo(idVeiculo),
fkEquipe INT,
	FOREIGN KEY (fkEquipe) REFERENCES tabelaEquipe(idEquipe),
fkLiderDeEquipe INT,
	FOREIGN KEY (fkLiderDeEquipe) REFERENCES tabelaUsuario(idUsuario)
);



CREATE TABLE tabelaTorneio (
idTorneio INT AUTO_INCREMENT,
nomeTorneio VARCHAR(50),
tipoTorneio VARCHAR(50),
descricaoTorneio VARCHAR(50),
pontoDePartida VARCHAR(50),
pontoDeChegada VARCHAR(50),
    fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES tabelaUsuario(idUsuario),
PRIMARY KEY (idTorneio, fkUsuario),
    CONSTRAINT checkTipoTorneio
		CHECK (tipoTorneio IN ('Ladeira', 'Trick', 'Rei da Colina', 'Mata-mata em equipe', '1v1', 'Cada Um Por Si'))
);



CREATE TABLE tabelaTorneioDeUsuario (
idUsuario INT,
    FOREIGN KEY (idUsuario) REFERENCES tabelaUsuario(idUsuario),
idTorneio INT,
    FOREIGN KEY (idTorneio) REFERENCES tabelaTorneio(idTorneio),
PRIMARY KEY (idUsuario, idTorneio)
);