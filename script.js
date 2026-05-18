let velocidade = 0.6;
let margem = 5;
let questaoAtiva = false;
let vidas = 3;
let questaoAtual = 0;

let jsonQuestoes = [
    {
        "pergunta": "Qual é a função da memória RAM em um computador?",
        "opcoes": [
            "./img/fotosQuestoes/hd.png",
            "./img/fotosQuestoes/placa_video.png",
            "./img/fotosQuestoes/ram.png"
        ],
        "respostaCorreta": 2,
        "tempo": 1.00
    },
    {
        "pergunta": "Qual componente é responsável por processar as informações em um computador?",
        "opcoes": [
            "./img/fotosQuestoes/cpu.jpg",
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/dualCore.jpg"
        ],
        "respostaCorreta": 2,
        "tempo": 3.00
    },
    {
        "pergunta": "Qual é a função de uma placa de vídeo em um computador?",
        "opcoes": [
            "./img/fotosQuestoes/cpu.jpg",
            "./img/fotosQuestoes/dualCore.jpg",
            "./img/fotosQuestoes/ram.png"
        ],
        "respostaCorreta": 2,
        "tempo": 3.00
    },
    {
        "pergunta": "Qual componente é responsável por processar as informações em um computador?",
        "opcoes": [
            "./img/fotosQuestoes/cpu.jpg",
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/dualCore.jpg"
        ],
        "respostaCorreta": 2,
        "tempo": 10.00
    }
];

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

    personagem.style.backgroundImage =
        (direcao == 'esquerda' ? 'url(./img/spritesPersonagens/esquerdaParado.svg)' : 'url(./img/spritesPersonagens/direitaParado.svg)');

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
        opcoes.style.display = 'none';

    }
}

let mostrandoQuestao = setInterval(mostrarQuestao, 100);

let opcaoEscolhida = 0;

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

            opcao1.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 1 ? 'green' : 'red';
            opcao2.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 2 ? 'green' : 'red';
            opcao3.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 3 ? 'green' : 'red';

            if (opcaoEscolhida != jsonQuestoes[questaoAtual].respostaCorreta) {
                perdeuVida = true;
                clearInterval(animacaoTempo);
                clearInterval(mostrandoQuestao);
            }
            rodadaAtiva = true;
        }
    }
}

let rodadaAtiva = false;
let animacaoTempo = setInterval(atualizarTempo, 30);

let perdeuVida = false;
let proximaAtiva = false;
function atualizarVidas() {
    if (rodadaAtiva) {
        if (perdeuVida) {
            vidas--;
            perdeuVida = false;
        }
        if (vidas <= 0) {
            console.log("Game Over!");
            setTimeout(animacaoPerdeu, 1000);
            clearInterval(intervaloVidas);
        } else {
            console.log("Vidas restantes: " + vidas);
            abrirParedeProxima();
        }
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

let intervaloVidas = setInterval(atualizarVidas, 1000);

let verificarProximo;
let ativarProximaQuestao = false;
function abrirParedeProxima() {
    parede_proxima.style.display = 'block';
    verificarProximo = setInterval(function () {
        if (porcentagemTela > 90) {
            clearInterval(verificarProximo);
            ativarProximaQuestao = true;
            rodadaAtiva = false;
            proximaQuestao();
        }
    }, 100);
}

function proximaQuestao() {
    questaoAtual++;
    margem = 5;
    porcentagemTela = margem;
    clearInterval(verificarProximo);

    if (questaoAtual < jsonQuestoes.length) {
        questaoAtiva = false;

        tempo.textContent = jsonQuestoes[questaoAtual].tempo.toFixed(2);

        pergunta.textContent = jsonQuestoes[questaoAtual].pergunta;

        opcao1.src = jsonQuestoes[questaoAtual].opcoes[0];
        opcao2.src = jsonQuestoes[questaoAtual].opcoes[1];
        opcao3.src = jsonQuestoes[questaoAtual].opcoes[2];

        parede_proxima.style.display = 'none';
        mostrandoQuestao = setInterval(mostrarQuestao, 100);
        animacaoTempo = setInterval(atualizarTempo, 30);

    } else {    
        console.log("Parabens voce venceu, Fim do jogo!");
        return;
    }
}

function animacaoPerdeu() {
    let pulinho = 12;
    let subindo = true;

    const loop = setInterval(() => {
        if (subindo) {
            pulinho += 2;
            if (pulinho >= 35) {
                subindo = false;
            }
        } else {
            pulinho -= 3;
            if (pulinho <= -20) {
                clearInterval(loop);
                setTimeout(() => {
                    location.reload();
                }, 1500);
            }
        }

        personagem.style.bottom = pulinho + 'dvh';
    }, 70); 
}