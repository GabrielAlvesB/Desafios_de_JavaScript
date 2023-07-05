const idadeDoUsuario = 22
const tipoPasse = "estudante"
const tarifaNormal = 2.5

function calcularTarifa(idadeDoUsuario, tipoPasse) {
    if(idadeDoUsuario <6){
        return 0
    }
    let desconto = 0

    if(tipoPasse === "estudante"){
        desconto = 0.5
    }
    else if (tipoPasse === "idoso" && idadeDoUsuario >60){
        desconto = 0.3
    }
    return tarifaNormal *(1 - desconto)
}

const tarifa = calcularTarifa(idadeDoUsuario, tipoPasse)

console.log(`Usuario tem ${idadeDoUsuario}anos e tem ${tipoPasse} e de  r$ ${tarifa.toFixed(2)}`)