/* Exemplo 01 */
const subExemplo01 = document.querySelector("#subtitulo-exemplo01");
const msg = document.querySelector("#mensagem");

// Monitor/Ouvinte de Evento
subExemplo01.addEventListener("click", function(){
    msg.textContent = "Oláaaaaaaa!!!";
    msg.style.fontSize = "25px";
    subExemplo01.style.backgroundColor = "yellow";
});

subExemplo01.addEventListener("dblclick", function(){ 
    msg.textContent = "";
});

/* Exemplo 02: modo noturno */
const botao = document.querySelector("#noturno");
const pagina = document.querySelector("body");

botao.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    /* Se o texto do botão for Ativar... */
    if ( botao.textContent == 'Ativar') {
        // então, mudamos para Desativar:
        botao.textContent = "Desativar";
    } else {
        // senão, mudamos para Ativar
        botao.textContent = "Ativar";
    }
});


/* Exemplo 03: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

// Detectar o acionamento do formulário
// Obs.: a função dentro do listener, é chamada de Callback
formulario.addEventListener("submit", function(event){
    /* Anulando o comportamento padrão do navegador
    (redirecionar o formulário) */
    event.preventDefault();

    // 1) Capturar os dados digitados nos campos
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    // 2) Calcular a média das notas
    let media = (nota1 + nota2) / 2;

    // Correção Exercício 1
    let situacao; // inicializada
    if (media >= 7) {
        situacao = "aprovado";
    } else {
        situacao = "reprovado"
    }

    // 3) Criando elemento dinamicamente via JS

    // 3.1) Criar o elemento/tag
    let paragrafo = document.createElement("p");

    // 3.2) Montar o conteúdo da tag                // Correção Exercício 2
    paragrafo.innerHTML = `<b>${nome}</b> - <i>${media}</i> - ${situacao}`;

    // 3.3) Adicionar tag/conteúdo à div de resultados
    divResultados.appendChild(paragrafo);

    /* Desafio: faça com que os campos do formulário
    sejam resetados ao enviar. */
    formulario.reset(); // ou this.reset()

    // Devolvendo o foco (cursor) para o campo nome
    campoNome.focus();
});

