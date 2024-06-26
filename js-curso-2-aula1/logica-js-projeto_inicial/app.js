/**
alert('Boas vindas ao nosso site.');
let numeroMaximo = parseInt(100 * (Math.random() * 100));
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
console.log(numeroSecreto);
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        tentativas++;
        alert('Você errou!');
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}.`);
        } else {
            alert(`O número secreto é maior que ${chute}.`);
            
        }
    }
}
// Operador Ternário...
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);
*/