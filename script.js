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
        enunciado: "Após o ensino médio, qual caminho atrai você mais?",
        alternativas: [
            {
                texto: "Ingressar em uma faculdade ou curso técnico para obter uma formação especializada..",
                afirmacao: "Seu plano envolve uma formação acadêmica ou técnica ."
            },
            {
                texto: "Entrar no mercado de trabalho ou dedicar-se a um projeto pessoal ou familiar..",
                afirmacao: "Você está considerando caminhos que priorizam a experiência prática imediata."
            }
        ]
    },
    {
        enunciado: "Qual é o seu nível de utilização de ferramentas de IA, como ChatGPT em atividades escolares?",
        alternativas: [
            {
                texto: "Utilizo com frequência para pesquisa, rascunhos e apoio na escrita.",
                afirmacao: "Você é um usuário frequente de IA como assistente de estudo e produção."
            },
            {
                texto: "Não utilizo ou uso muito raramente, prefiro métodos tradicionais",
                afirmacao: "Você tende a preferir métodos de estudo tradicionais e ainda não incorporou a IA."
            }
        ]
    },
    {
        enunciado: "Qual método de estudo funciona melhor para você absorver novos conteúdos?",
        alternativas: [
            {
                texto: "Aulas práticas, experimentos.",
                afirmacao: "Aprende melhor fazendo e experimentando."
            },
            {
                texto: "Leitura de textos, resumos detalhados.",
                afirmacao: "Prefere ver as informações organizadas. "
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
    caixaPerguntas.textContent = "Sobre...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();