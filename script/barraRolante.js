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