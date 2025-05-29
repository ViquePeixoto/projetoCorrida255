

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

// Estrutura para a barra rolante com flavor text.
var textos = [
    'BEM-VINDO AO PRÓXIMO NÍVEL.',
    'PIXE MUROS, BATA EM FASCISTAS.',
    'O QUE VOCÊ TEM A PERDER ALÉM DE SUAS CORRENTES?',
    'VAI, VAI, VAI!',
    'E QUEM DIABOS VOCÊ ACHA QUE EU SOU?',
    'SUA VIDA NA LINHA.',
    'DANÇAR CONTIGO O TEMPO TODO...',
    'BARULHO NESSA INVASÃO!',
    'NÃO DÁ PRA ME TIRAR DAQUI.',
    'NÃO PARE AGORA!',
    'EU JÁ DEVIA SABER!!',
    'MOTOSSERRA COM SUÍNGUE.',
    'CHEGA JUNTO!',
    'O FUTURO NUNCA FOI ESCRITO...',
    'JOGA ESSE AMOR PRO ALTO!',
    'AÍ VOU EU!',
    'MEIA-NOITE. BOA NOITE, SP.',
    'BA-DA-BA. BA-DA-BA, BA-DA-BA, BA-DA...',
];

var spanFlavorText = document.getElementById("spanFlavorText");
var flavorAnterior = -1;

function flavorTextAleatorio() {
    var novoIndice;
    
    do {
        novoIndice = Math.floor(Math.random() * textos.length);
    } while (novoIndice == flavorAnterior);
    flavorAnterior = novoIndice;
    spanFlavorText.style.opacity = 0;
    
    setTimeout(() => {
        spanFlavorText.textContent = textos[novoIndice];
        spanFlavorText.style.opacity = 1; }, 500);
} flavorTextAleatorio();
setInterval(flavorTextAleatorio, 6000);

document.addEventListener('scroll', () => {
    var scroll = window.scrollY;
    var sidebar = document.querySelector('.sideBar');
    sidebar.style.setProperty('--scroll-position', `${scroll / 3}px`); });