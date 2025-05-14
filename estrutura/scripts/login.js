var containerMusica = document.querySelector('.containerMusica')
var musicaPausar = document.querySelector('#play')
var musicaAnterior = document.querySelector('#prev')
var musicaProxima = document.querySelector('#next')
var audio = document.querySelector('#audio')
var progresso = document.querySelector('.progresso')
var containerProgresso = document.querySelector('.containerProgresso')
var titulo = document.querySelector('#titulo')
var capa = document.querySelector('#capas')

// Titulos das musicas
var musicas = ['(Over)Thinking',
    'Biollante',
    'Boa Noite São Paulo',
    'CAMISA DO FLAMENGO',
    'Canto da Sereia',
    'Foi Mal Aí',
    'Garage Talk',
    'Luv Story',
    'Malandro Demais Vira Bicho',
    'Negro Drama',]

// Acompanhando as musicas

var musicaIndex = 2;

// Iniciar a musica no document
carregarMusica(musica[musicaIndex])

// Atualizar detalhes das musicas
function carregarMusica(musicas) {
    titulo.innerText = song
    audio.src = `musicas/${musicas}.mp3`
    capa.src = `capas/${musicas}.jpg`
}

function tocarMusica() {
containerPlayer.classList.add('play')
botaoPlayer.querySelector('i.fas').classList.remove('fa-play')
botaoPlayer.querySelector('i.fas').classList.add('fa-pause')
audio.play()
}

function pausarMusica() {
    containerPlayer.classList.remove('play')
botaoPlayer.querySelector('i.fas').classList.add('fa-play')
botaoPlayer.querySelector('i.fas').classList.remove('fa-pause')
audio.pause()
}

function prevSong() {
    musicaIndex --

    if(musicaIndex < 0) {
        musicaIndex = musicas.length - 1;
    }

    carregarMusica(musicas[musicaIndex])
    tocarMusica()
}

function nextSong() {
    musicaIndex ++

    if(musicaIndex > musicas.length -1) {
        musicasIndex = 0;
    }

    carregarMusica(musicas[musicaIndex])
    tocarMusica();
}
// Event Listeners
botaoPlayer.addeventListener('click', () =>) {
    var isPlaying = containerPlayer.classList.contains('play')

    if (isPlaying == true) {
        pausarMusica()
    } else {
        tocarMusica()
    }
}

// Trocar de musica
musicaAnterior.addEventListener('click', prevSong)
musicaProxima.addEventListener('click', nextSong)