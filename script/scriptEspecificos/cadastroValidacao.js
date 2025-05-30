
// Estrutura para a validação de cadastro.
var listaDeNomes = [];
var listaDeSenhas = [];
var listaDeEmails = [];
var listaDeSimbolosEspeciais = [
    '.', ',', '+', '-', '_', '(',
    '!', '@', '>', '?', '/', ')',
    '#', '$', ':', '|', '<', '%',
    '^', '{', '}', ';', '&', '*',
    '=', '[', ']' ];

function validarNome() {
    var mensagem = "";
    var nome = inputNome.value;

    for (var i = 0; i < nome.length; i ++) {
        if (listaDeSimbolosEspeciais.includes(nome[i])) {
            mensagem = "Permitimos de tudo, mas cuidado com os símbolos especiais.";
            break; }
    } divVerificacaoDeConta.innerHTML = mensagem;
}

function validarEmail() {
    var mensagem = "";
    var email = inputEmail.value;

    if (!email.includes('@')) {
        mensagem = "Seu e-mail não contém um @... Ainda.";
    } divVerificacaoDeConta.innerHTML = mensagem;
}

function validarSenha() {
    var mensagem = "";
    var senha = inputSenha.value;

    var contemLetraMaiuscula = false;
    var contemLetraMinuscula = false;
    var contemNumero = false;
    var contemSimbolosEspeciais = false;

    for (var i = 0; i < senha.length; i++) {
        var validacaoSenha = senha[i];
        if (validacaoSenha >= "A" && validacaoSenha <= "Z") {
            contemLetraMaiuscula = true;
        }
        else if (validacaoSenha >= "a" && validacaoSenha <= "z") {
            contemLetraMinuscula = true;
        }
        else if (validacaoSenha >= "0" && validacaoSenha <= "9") {
            contemNumero = true;
        } 
        else if (listaDeSimbolosEspeciais.includes(validacaoSenha)) {
            contemSimbolosEspeciais = true; }
    }
    
    if (!(contemLetraMaiuscula && contemLetraMinuscula && contemNumero && contemSimbolosEspeciais)) {
        mensagem = "Para sua segurança, use letras maiúsculas, minúsculas, números e símbolos.";
    } divVerificacaoDeConta.innerHTML = mensagem;
}

function verificarCriacaoDeConta() {
    var mensagem = "";
    var nome = inputNome.value;
    var email = inputEmail.value;
    var senha = inputSenha.value;

    if (nome == "" || email == "" || senha == "") {
        mensagem = "Preencha todos os campos para prosseguir.";
        divVerificacaoDeConta.innerHTML = mensagem;
        return;
    }

    if (validarNome() && validarEmail() && validarSenha()) {
        listaDeNomes.push(nome);
        listaDeEmails.push(email);
        listaDeSenhas.push(senha);
        mensagem = "Sua conta foi criada com sucesso!";
    }
    else {
        mensagem = "Não foi possível cadastrar sua conta. Tente novamente.";
    } divVerificacaoDeConta.innerHTML = mensagem;
}