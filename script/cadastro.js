
// Estrutura para a validação de cadastro.
var listaDeNomes = [];
var listaDeSenhas = [];
var listaDeEmails = [];

function validarNome() {
    var mensagem = "";
    var nome = inputNome.value;
    
    for (var i = 0; i <= listaDeNomes.length; i ++) {
        var nomeAtual = i;
    }
}

function validarEmail() {
    var mensagem = "";
    var email = inputEmail.value;
    
    if (!email.includes('@')) {
        mensagem 
    }
}
    
function validarSenha() {
    var mensagem = "";
    var senha = inputSenha.value;
}

function verificarCriacaoDeConta() {
    var mensagem = "";
    var nome = inputNome.value;
    var email = inputEmail.value;
    var senha = inputSenha.value;
    
    if ((nome || email || senha) == "") {
        mensagem = "Preencha todos os campos para prosseguir."
    } else {
        mensagem = "Sua conta foi criada com sucesso."
    } divValidacaoDeConta.innerHTML = mensagem;
}