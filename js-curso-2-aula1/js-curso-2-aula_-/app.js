let listasDeNumerosSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Digite um número entre 1 e 10');
function exibirTextoNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}

function limparCampo(){
    document.querySelector('input').value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(listasDeNumerosSorteado);
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Digite um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}

function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acerto o número secreto com ${tentativas} ${palavraTentativa}`;
        limparCampo();
        document.getElementById('chutar').setAttribute('disabled', true);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }
        tentativas++
        limparCampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listasDeNumerosSorteado.length

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listasDeNumerosSorteado = [];
    }

    if (listasDeNumerosSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listasDeNumerosSorteado.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
console.log(numeroSecreto);