const precoGasolina = 5.80;
const precoEtanol = 4.40
const quilometrosGasolina = 12;
const quilometrosEtanol = 7;
const kmDaViagem = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = kmDaViagem / quilometrosPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else { 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

