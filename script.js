const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual tipo de desafio te atrai mais ?",
        alternativas: [
            {
                texto: "Problemas que exigem lógica e números",
                afirmacao: "Você é movido por desafios analíticos e exatas. "
            },
            {
                texto: "Problemas que exigem criatividade e palavras.",
                afirmacao: "Você é mais voltado para o mundo das linguagens e ideias."
            }
        ]
    },
    {
        enunciado: " Qual a sua motivação para estudar?",
        alternativas: [
            {
                texto: "Obter uma boa formação para ter um emprego estável.",
                afirmacao: "Você valoriza a segurança e um futuro bem planejado."
            },
            {
                texto: "Aprender coisas novas e descobrir o mundo.",
                afirmacao: "Sua principal motivação é a curiosidade e o desejo de conhecimento."
            }
        ]
    },
    {
        enunciado: "Voce pretende fazer faculdade?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Sim, pretendo ser um ótimo profissional."
            },
            {
                texto: "Não.",
                afirmacao: "Não, pretendo ficar trabalho com os meus pais."
            }
        ]
    },
    {
        enunciado: "Em que periodo voce está estudando no colégio?",
        alternativas: [
            {
                texto: "Matutino.",
                afirmacao: "No periodo da manhã."
            },
            {
                texto: "Vespertino",
                afirmacao: "No periodo da tarde"
            }
        ]
    },
    {
        enunciado: "Voce utiliza o chatgpt para fazer atividades?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: "Me ajuda muito."
            },
            {
                texto: "Não.",
                afirmacao: "Não utilizo tá. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes +"" ;
    atual++;
    mostraPergunta();

}
function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();