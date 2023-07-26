class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
       const imc = this.calcularImc();
        if (imc < 18.5) {
            return('abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
        return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
        return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } else {
            return('Obesidade grave');
        }

        }
       }

const jose = new Pessoas('tallisson', 66, 1.85);
console.log(tallisson.classificarImc());
const gustavo = new Pessoas('gustavo', 82, 1.86);
console.log(gustavo.classificarImc());