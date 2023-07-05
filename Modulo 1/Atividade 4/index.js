const comprimento = 10
const largura = 5

function calculo(comprimento, largura) {

    let area = comprimento * largura
    let perimetro = 2 * (comprimento + largura)

    return `Com o comprimento ${comprimento} e a largura de ${largura}, temos a area de ${area}, e o perímetro ${perimetro}`
    
}

console.log(calculo(comprimento, largura))