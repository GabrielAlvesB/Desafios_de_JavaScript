const nome = "Gabriel"
const idade = 22
const cidade = "Caratinga"
const estado = "MG"

function criarMensagem(nome,idade,cidade,estado) {
    return `Meu nome é ${nome} tenho ${idade} anos, e sou residente da cidade de ${cidade} estado de ${estado}`
}

console.log(criarMensagem(nome,idade,cidade,estado))