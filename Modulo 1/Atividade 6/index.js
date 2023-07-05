let idade

function verificadorIdade(idade) {
    if(idade < 0){
        console.log(`Impossivel ter essa idade`)
    }

    if(idade <= 12){
        console.log(`Criança`)
    }
    else if(idade <= 17){
        console.log(`Adolecente`)
    }
    else if(idade <= 59){
        console.log(`Adulto`)
    }
    else{
        console.log(`idoso`)
    }
}

verificadorIdade(-11)
verificadorIdade(13)
verificadorIdade(18)
verificadorIdade(54)
verificadorIdade(61)
verificadorIdade(0)