
// Estrutura para o slider presente no index.
    var textos = document.querySelectorAll('.slideshowTexto');
    var botaoEsquerda = document.querySelector('.slideshowBotao.esquerda');
    var botaoDireita = document.querySelector('.slideshowBotao.direita');
    var i = 0;

    function mostrarSlide(i) {
        textos.forEach((texto, index) => {
            texto.classList.toggle('ativo', index === i);
        });
    }
    botaoEsquerda.addEventListener('click', () => {
        i = (i - 1 + textos.length) % textos.length;
        mostrarSlide(i); });

    botaoDireita.addEventListener('click', () => {
        i = (i + 1) % textos.length;
        mostrarSlide(i); });
    
    mostrarSlide(i);