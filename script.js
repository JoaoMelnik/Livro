
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você encontrou um livro antigo que contém segredos sobre uma sociedade secreta que controla eventos mundiais. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Decide investigar mais sobre a sociedade secreta.",
                afirmacao: "Sua curiosidade o levou a pesquisar profundamente sobre a sociedade secreta."
            },
            {
                texto: "Acha que é apenas uma lenda e decide não dar muita importância.",
                afirmacao: "Você preferiu focar em suas atividades diárias, considerando o livro como uma curiosidade passageira."
            }
        ]
    },
    {
        enunciado: "Durante sua pesquisa, você encontra um fórum online onde pessoas discutem sobre a sociedade secreta. Qual é a sua próxima ação?",
        alternativas: [
            {
                texto: "Participa ativamente das discussões, compartilhando suas descobertas e teorias.",
                afirmacao: "Seu entusiasmo contribuiu para debates calorosos e você ganhou reconhecimento no fórum."
            },
            {
                texto: "Lê as discussões passivamente, sem interagir muito.",
                afirmacao: "Você prefere absorver informações sem se envolver diretamente nas conversas."
            }
        ]
    },
    {
        enunciado: "Um dos membros do fórum sugere um encontro presencial para trocar informações. Você decide ir ao encontro?",
        alternativas: [
            {
                texto: "Sim, acha importante conhecer outras pessoas interessadas no assunto.",
                afirmacao: "Você fez novas conexões e descobriu informações valiosas através das discussões presenciais."
            },
            {
                texto: "Não, prefere manter-se seguro e continuar suas pesquisas online.",
                afirmacao: "Sua prudência o manteve focado nas pesquisas online, evitando possíveis riscos."
            }
        ]
    },
    {
        enunciado: "Após meses de pesquisa, você acha que encontrou uma pista que leva a um artefato importante. O que você faz?",
        alternativas: [
            {
                texto: "Vai imediatamente procurar o artefato.",
                afirmacao: "Sua determinação o levou a uma grande descoberta, apesar dos desafios encontrados."
            },
            {
                texto: "Decide reunir mais informações antes de agir.",
                afirmacao: "Sua cautela garantiu que estivesse bem preparado, evitando possíveis armadilhas."
            }
        ]
    },
    {
        enunciado: "Você finalmente encontra o artefato, mas está em um local de difícil acesso. Como você procede?",
        alternativas: [
            {
                texto: "Tenta acessar o local sozinho, confiando em suas habilidades.",
                afirmacao: "Sua autoconfiança o ajudou a superar obstáculos, mas não sem enfrentar dificuldades significativas."
            },
            {
                texto: "Procura ajuda de especialistas para garantir que a operação seja segura.",
                afirmacao: "Trabalhando em equipe, você conseguiu acessar o artefato com segurança e eficiência."
            }
        ]
    }
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
