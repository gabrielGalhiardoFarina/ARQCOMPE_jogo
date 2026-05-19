let velocidade = 0.6;
let margem = 5;
let questaoAtiva = false;
let vidas = 3;
let questaoAtual = 0;

let jsonQuestoes = [
    {
        "pergunta": "Qual é a unidade central de processamento para o computador poder fazer os processamentos?",
        "opcoes": [
            "./img/fotosQuestoes/ula.png",
            "./img/fotosQuestoes/cpu.jpg",
            "./img/fotosQuestoes/dma.jpg"
        ],
        "respostaCorreta": 1,
        "tempo": 10.00
    },
    {
        "pergunta": "Qual parte do computador executa operações de cálculos matemáticos e lógicos?",
        "opcoes": [
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/rom.jpg",
            "./img/fotosQuestoes/ula.png"
        ],
        "respostaCorreta": 2,
        "tempo": 8.00
    },
    {
        "pergunta": "Qual é o tipo de memória minúscula e ultrarrápida que guarda dados temporários dentro da CPU?",
        "opcoes": [
            "./img/fotosQuestoes/registradores.png",
            "./img/fotosQuestoes/flash.jpg",
            "./img/fotosQuestoes/eprom.webp"
        ],
        "respostaCorreta": 0,
        "tempo": 7.00
    },
    {
        "pergunta": "Qual memória temporária armazena os dados apenas enquanto o computador está ligado?",
        "opcoes": [
            "./img/fotosQuestoes/rom.jpg",
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/memoriaDeMassa.png"
        ],
        "respostaCorreta": 1,
        "tempo": 6.00
    },
    {
        "pergunta": "Qual memória permanente guarda dados essenciais para o funcionamento, como o BIOS?",
        "opcoes": [
            "./img/fotosQuestoes/rom.jpg",
            "./img/fotosQuestoes/flash.jpg",
            "./img/fotosQuestoes/ram.png"
        ],
        "respostaCorreta": 0,
        "tempo": 7.00
    },
    {
        "pergunta": "Qual memória derivada da ROM pode ter seu conteúdo apagado por luz ultravioleta e reescrito?",
        "opcoes": [
            "./img/fotosQuestoes/flash.jpg",
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/eprom.webp"
        ],
        "respostaCorreta": 2,
        "tempo": 7.00
    },
    {
        "pergunta": "Qual memória não perde os dados, grava eletronicamente e é usada em pen drives?",
        "opcoes": [
            "./img/fotosQuestoes/flash.jpg",
            "./img/fotosQuestoes/eprom.webp",
            "./img/fotosQuestoes/rom.jpg"
        ],
        "respostaCorreta": 0,
        "tempo": 6.00
    },
    {
        "pergunta": "Qual memória armazena grandes volumes de dados de forma permanente?",
        "opcoes": [
            "./img/fotosQuestoes/ram.png",
            "./img/fotosQuestoes/registradores.png",
            "./img/fotosQuestoes/memoriaDeMassa.png"
        ],
        "respostaCorreta": 2,
        "tempo": 8.00
    },
    {
        "pergunta": "O que dá acesso direto à memória, economizando tempo e sem precisar da CPU?",
        "opcoes": [
            "./img/fotosQuestoes/cs.png",
            "./img/fotosQuestoes/dma.jpg",
            "./img/fotosQuestoes/adressBus.png"
        ],
        "respostaCorreta": 1,
        "tempo": 7.00
    },
    {
        "pergunta": "Qual pino de controle permite à CPU ativar um periférico ou chip específico?",
        "opcoes": [
            "./img/fotosQuestoes/cs.png",
            "./img/fotosQuestoes/dataBus.png",
            "./img/fotosQuestoes/dma.jpg"
        ],
        "respostaCorreta": 0,
        "tempo": 9.00
    },
    {
        "pergunta": "Qual barramento aponta de onde um dado vem ou para onde ele deve ser enviado?",
        "opcoes": [
            "./img/fotosQuestoes/dataBus.png",
            "./img/fotosQuestoes/adressBus.png",
            "./img/fotosQuestoes/cs.png"
        ],
        "respostaCorreta": 1,
        "tempo": 6.00
    },
    {
        "pergunta": "Por qual barramento a informação viaja depois que o local correto é apontado?",
        "opcoes": [
            "./img/fotosQuestoes/dataBus.png",
            "./img/fotosQuestoes/adressBus.png",
            "./img/fotosQuestoes/dma.jpg"
        ],
        "respostaCorreta": 0,
        "tempo": 8.50
    },
    {
        "pergunta": "Qual processador da Intel foi lançado em setembro de 2009?",
        "opcoes": [
            "./img/fotosQuestoes/i7.webp",
            "./img/fotosQuestoes/i5.webp",
            "./img/fotosQuestoes/dualCore.jpg"
        ],
        "respostaCorreta": 1,
        "tempo": 7.00
    },
    {
        "pergunta": "Qual processador da Intel lançado em 2008 lida com maestria com transmissões e jogos pesados?",
        "opcoes": [
            "./img/fotosQuestoes/i7.webp",
            "./img/fotosQuestoes/i5.webp",
            "./img/fotosQuestoes/quadCore.jpg"
        ],
        "respostaCorreta": 0,
        "tempo": 8.00
    },
    {
        "pergunta": "Como é chamado o processador que possui exatamente 2 núcleos físicos?",
        "opcoes": [
            "./img/fotosQuestoes/quadCore.jpg",
            "./img/fotosQuestoes/i5.webp",
            "./img/fotosQuestoes/dualCore.jpg"
        ],
        "respostaCorreta": 2,
        "tempo": 8.50
    },
    {
        "pergunta": "Como é chamado o processador que possui exatamente 4 núcleos físicos?",
        "opcoes": [
            "./img/fotosQuestoes/quadCore.jpg",
            "./img/fotosQuestoes/dualCore.jpg",
            "./img/fotosQuestoes/i7.webp"
        ],
        "respostaCorreta": 0,
        "tempo": 9.00
    }
];

let tecla = {
    a: false,
    d: false
};


let porcentagemTela = margem;
let direcao = 'direita';

personagem.style.left = porcentagemTela + '%';

let musicaFundo = new Audio('./sons/musicaDeFundo.mp3');
musicaFundo.loop = true;
let musicaJaComecou = false;

document.addEventListener('keydown', function (evento) {
    if (musicaJaComecou === false) {
        musicaFundo.play();
        musicaJaComecou = true;
    }

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

    if (porcentagemTela > 44 && questaoAtual < jsonQuestoes.length) {
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
                opcaoEscolhida = 0;
            } else if (porcentagemTela >= 33 && porcentagemTela < 66) {
                opcao1.style.borderColor = 'cadetblue';
                opcao2.style.borderColor = 'darkBlue';
                opcao3.style.borderColor = 'cadetblue';
                opcaoEscolhida = 1;
            } else {
                opcao1.style.borderColor = 'cadetblue';
                opcao2.style.borderColor = 'cadetblue';
                opcao3.style.borderColor = 'darkBlue';
                opcaoEscolhida = 2;
            }

        } else {
            tempo.textContent = '0.00';

            opcao1.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 0 ? 'green' : 'red';
            opcao2.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 1 ? 'green' : 'red';
            opcao3.style.borderColor = jsonQuestoes[questaoAtual].respostaCorreta === 2 ? 'green' : 'red';

            if (opcaoEscolhida != jsonQuestoes[questaoAtual].respostaCorreta) {
                perdeuVida = true;
                clearInterval(animacaoTempo);
                clearInterval(mostrandoQuestao);
            } else {
                clearInterval(animacaoTempo);
                clearInterval(mostrandoQuestao);
            }
            rodadaAtiva = true;
        }
    }
}

let rodadaAtiva = false;
let animacaoTempo = setInterval(atualizarTempo, 10);

let perdeuVida = false;
let proximaAtiva = false;
function atualizarVidas() {
    if (rodadaAtiva) {
        rodadaAtiva = false;
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

let efeitoGanhou = new Audio('./sons/ganhou.mp3');
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
        efeitoGanhou.play();
        questaoAtiva = false;
        parede_proxima.style.display = 'none';
        console.log("Parabens voce venceu, Fim do jogo!");
        ganharJogo();
        return;
    }
}

let efeitoPerdeu = new Audio('./sons/perdeu.mp3');
function animacaoPerdeu() {
    let tamanhoPulo = 12;
    let subindo = true;

    const loop = setInterval(() => {
        if (subindo) {
            tamanhoPulo += 2;
            if (tamanhoPulo >= 35) {
                subindo = false;
            }
        } else {
            tamanhoPulo -= 3;
            efeitoPerdeu.play();
            if (tamanhoPulo <= -20) {
                clearInterval(loop);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }

        personagem.style.bottom = tamanhoPulo + 'dvh';
    }, 70);
}

function ganharJogo() {
    let tamanhoPulo = 12;
    let subindo = true;
    let numerosPulos = 0;


    const loop = setInterval(() => {
        if (subindo) {
            tamanhoPulo += 2;
            if (tamanhoPulo >= 35) {
                subindo = false;
            }
        } else {
            tamanhoPulo -= 3;
            if (tamanhoPulo <= 12) {
                tamanhoPulo = 12;
                subindo = true;
                numerosPulos++;
            }
        }
        if (numerosPulos >= 6) {
            clearInterval(loop);
        }


        personagem.style.bottom = tamanhoPulo + 'dvh';
    }, 30);

    questao.style.display = 'none';
    opcoes.style.display = 'none';

}
