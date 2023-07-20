const peso = 69;
const altura = 1.85;
const imc = peso / Math.pow(altura, 2);


if (media < 18.5) {
    console.log('abaixo do peso');

} else if (media > 18.5 && media <= 25) {
console.log('Peso normal');

} else if  (media >= 25 && media <=30) {
console.log('Acima do peso');

} else if (media >= 40) {
    console.log('Obesidade grave');
}
