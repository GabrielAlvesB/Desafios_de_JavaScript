 const peso = 1.75
 const altura = 70

function imc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2)
}

console.log(imc(altura, peso))