const velocidade = 0.6;
const margem = 5;

const tecla = { 
    a: false, 
    d: false 
};


let porcentagemTela = margem;
let direcao = 'direita';

personagem.style.left = porcentagemTela + '%';

document.addEventListener('keydown', function (evento) {
    if (evento.key === 'a' || evento.key === 'A') {
        tecla.a = true;
    }

    if (evento.key === 'd' || evento.key === 'D') {
        tecla.d = true;
    }
});

document.addEventListener('keyup', function (evento) {
    if (evento.key === 'a' || evento.key === 'A') {
        tecla.a = false;
    }

    if (evento.key === 'd' || evento.key === 'D') {
        tecla.d = false;
    }
});

setInterval(function () {
    if (tecla.a && !tecla.d) {
        porcentagemTela -= velocidade;
        direcao = 'esquerda';
    }

    if (tecla.d && !tecla.a) {
        porcentagemTela += velocidade;
        direcao = 'direita';
    }

    personagem.style.left = porcentagemTela + '%';
    personagem.style.backgroundImage = direcao === 'esquerda'
        ? 'url(./img/spritesPersonagens/esquerdaParado.svg)'
        : 'url(./img/spritesPersonagens/direitaParado.svg)';
}, 16);


