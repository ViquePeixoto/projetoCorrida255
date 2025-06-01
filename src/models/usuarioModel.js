var database = require("../../database/config")

function autenticar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    
var instrucaoSql = `SELECT idUsuario, nomeUsuario, emailUsuario FROM tabelaUsuario WHERE nomeUsuario = '${nome}' AND senhaUsuario = '${senha}';`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
var instrucaoSql = `INSERT INTO tabelaUsuario (nomeUsuario, emailUsuario, senhaUsuario) VALUES ('${nome}', '${email}', '${senha}');`;
console.log("Executando a instrução SQL: \n" + instrucaoSql);
return database.executar(instrucaoSql);
}

function atualizarPerfil(idUsuario, nome, email, senha, fotoDePerfil) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> atualizarPerfil():", idUsuario, nome, email, senha, fotoDePerfil);

    const instrucaoSql = `
        UPDATE tabelaUsuario
        SET nomeUsuario = '${nome}', emailUsuario = '${email}', senhaUsuario = '${senha}', fotoDePerfil = '${fotoDePerfil}'
        WHERE idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql); }

module.exports = { autenticar, cadastrar, atualizarPerfil };

