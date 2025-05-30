-- Modelagem em script do banco de dados.
CREATE DATABASE corrida255;
USE corrida255;


CREATE TABLE tabelaVeiculo (
idVeiculo INT PRIMARY KEY AUTO_INCREMENT,
nomeVeiculo VARCHAR(50),
tipoVeiculo VARCHAR(9),
rodaVeiculo VARCHAR(4),
estiloVeiculo VARCHAR(50)
    CONSTRAINT checkTipoVeiculo CHECK (in ('Skate', 'Bicicleta', 'Patins', 'Patinete', 'Trike')),
    CONSTRAINT checkRoda CHECK (in ('52mm', '60mm', '60mm+')),
    CONSTRAINT checkEstilo CHECK (in (
        'Twin Tip', 'Pintail', 'Drop Through', 'Freestyle', 'LDP', 'Downhill', 'Longboard', 'Shortboard', 'Popsicle', 'Old School', 'Mini Cruiser', 'Surfskate',
        'Mountain', 'BMX', 'Folding', 'Time Trial', 'Track', 'Recumbent', 'Cyclocross', 'Hybrid', 'Road',
        'Lifestyle', 'Park', 'Vintage', 'Jam', 'Derby',
        'Kick', 'Off-Road', 'Three Wheel', 'Folding',
        'Cargo', 'Recumbent', 'Tadpole', 'Delta', 'Drift', 'Rickshaw'))
);

CREATE TABLE tabelaEquipe (
idEquipe INT PRIMARY KEY AUTO_INCREMENT,
nomeEquipe VARCHAR(50),
descricaoEquipe VARCHAR(50)
);

CREATE TABLE tabelaTorneio (
idTorneio INT PRIMARY KEY AUTO_INCREMENT,
nomeTorneio VARCHAR(50),
tipoTorneio VARCHAR(50),
descricaoTorneio VARCHAR(50),
pontoDePartida VARCHAR(50),
pontoDeChegada VARCHAR(50),
    fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    CONSTRAINT checkTipoTorneio 
);

CREATE TABLE tabelaUsuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(50),
emailUsuario VARCHAR(50),
senhaUsuario VARCHAR(50),
fotoDePerfil VARCHAR(100),
vitorias INT,
    fkVeiculo INT, FOREIGN KEY (fkVeiculo) REFERENCES veiculo(idVeiculo),
    fkEquipe INT, FOREIGN KEY (fkEquipe) REFERENCES equipe(idEquipe),
    fkLiderDeEquipe INT, FOREIGN KEY (fkLiderDeEquipe) REFERENCES usuario(idUsuario)
);