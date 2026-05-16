let velocidade = 0.6;
let margem = 5;
let questaoAtiva = false;
let vidas = 3;


let tecla = {
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

    if (porcentagemTela > 44) {
        questaoAtiva = true;
    }

}, 16);

function mostrarQuestao() {
    if (questaoAtiva) {
        questao.style.display = 'block';
        opcoes.style.display = 'block';
    } else {
        questao.style.display = 'none';
    }
}

setInterval(mostrarQuestao, 100);

let opcaoEscolhida = 0;
let respostaCorreta = 3;

function atualizarTempo() {
    if (questaoAtiva) {
        let tempoAtual = parseFloat(tempo.textContent);
        if (tempoAtual > 0) {
            tempo.textContent = (tempoAtual - 0.03).toFixed(2);
            if (porcentagemTela < 33) {
                opcao1.style.borderColor = 'darkBlue';
                opcao2.style.borderColor = 'cadetblue';
                opcao3.style.borderColor = 'cadetblue';
                opcaoEscolhida = 1;
            } else if (porcentagemTela >= 33 && porcentagemTela < 66) {
                opcao1.style.borderColor = 'cadetblue';
                opcao2.style.borderColor = 'darkBlue';
                opcao3.style.borderColor = 'cadetblue';
                opcaoEscolhida = 2;
            } else {
                opcao1.style.borderColor = 'cadetblue';
                opcao2.style.borderColor = 'cadetblue';
                opcao3.style.borderColor = 'darkBlue';
                opcaoEscolhida = 3;
            }

        } else {
            tempo.textContent = '0.00';

            opcao1.style.borderColor = 'red';
            opcao2.style.borderColor = 'red';
            opcao3.style.borderColor = 'green';

            if (opcaoEscolhida != respostaCorreta) {
                perdeuVida = true;
                clearInterval(animacaoTempo);
            }
        }
    }
}
let animacaoTempo = setInterval(atualizarTempo, 30);

let perdeuVida = false;
function atualizarVidas() {
    if (perdeuVida) {
        vidas--;
        perdeuVida = false;
    }

    let qtdVidas = "";
    for (let i = 0; i < vidas; i++) {
        qtdVidas += '<div class="coracoes_vida"></div>';
    }
    for (let i = 0; i < 3 - vidas; i++) {
        qtdVidas += '<div class="coracoes_vazio"></div>';
    }
    containerVidas.innerHTML = qtdVidas;
}

setInterval(atualizarVidas, 1000);