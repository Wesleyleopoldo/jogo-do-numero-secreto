/**
 * Pessoas com uma quantidade de milhas inferior a 5.000 não recebem desconto.
 * Pessoas com uma quantidade de milhas igual ou superior a 30.000 recebem 20% de desconto.
 * Pessoas com uma quantidade de milhas superior a 5.000, mas inferior a 30.000, recebem 10% de desconto.
 */

let milhas = prompt("Digite aqui o número de milhas disponíveis: ");
let valorDescontado = 0;

if (milhas > 5000) {
    valorDescontado = 10;
}
if (milhas >= 30000) {
    valorDescontado = 20;
}