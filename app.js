let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function cliqueConsole() {
    console.log('O botão foi clicado!');
}

function cliqueAlerta() {
    alert('Eu amo JS');
}

function cliquePrompt() {
    let cidadeBrasil = prompt('Digite o nome de uma cidade do Brasil');
    alert(`Estive em ${cidadeBrasil} e lembrei de você!`);
}

function cliqueSoma() {
    alert('Vamos precisar de dois números inteiros para realizar a soma!');

    let primeiroNumero = prompt('Digite o primeiro número inteiro: ');
    let segundoNumero = prompt('Digite o segundo número inteiro: ');

    let soma = Number(primeiroNumero) + Number(segundoNumero);

    alert(`A soma dos dois números inteiros é ${soma}`);
}