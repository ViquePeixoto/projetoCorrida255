var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    }
    else {
        usuarioModel.autenticar(nome, senha)
        .then(
            function (resultadoAutenticar) {
                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);
                
                if (resultadoAutenticar.length == 1) {
                    console.log(resultadoAutenticar);
                    res.json({
                        id: resultadoAutenticar[0].idUsuario,
                        nome: resultadoAutenticar[0].nomeUsuario,
                        email: resultadoAutenticar[0].emailUsuario });
                }
                else if (resultadoAutenticar.length == 0) {
                    res.status(403).send("Nome e/ou senha inválido(s)");
                }
                else {
                    res.status(403).send("Mais de um usuário com o mesmo login e senha!"); }
            })
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage); }); }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }
    else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    }
    else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }
    else {
        usuarioModel.cadastrar(nome, email, senha)
        .then(function (resultado) {
                res.json(resultado);
        })
        .catch(function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao realizar o cadastro! Erro: ",
                erro.sqlMessage);
                res.status(500).json(erro.sqlMessage); }); }
}

function atualizarPerfil(req, res) {
    var idUsuario = req.body.idUsuario;
    var nome = req.body.nomeUsuario;
    var email = req.body.emailUsuario;
    var senha = req.body.senhaUsuario;
    var fotoDePerfil = req.body.fotoDePerfil;

    if (idUsuario == undefined) {
        res.status(400).send("O ID do usuário está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("O nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("O email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("A senha está undefined!");
    } else if (fotoDePerfil == undefined) {
        res.status(400).send("A foto de perfil está undefined!");
    } else {
        usuarioModel.atualizarPerfil(idUsuario, nome, email, senha, fotoDePerfil)
            .then(function (resultado) {
                res.json({ mensagem: "Perfil atualizado com sucesso!" });
            })
            .catch(function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao atualizar o perfil! Erro:", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage); }); }
}

module.exports = { autenticar, cadastrar, atualizarPerfil }