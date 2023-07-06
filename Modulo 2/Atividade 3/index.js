function maiorNumero(n1, n2) {
    if(n1 > n2){
        console.log(`O ${n1} e maior que ${n2}`)
    }
    else if(n2 > n1){
        console.log(`O ${n2} e maior que ${n1}`)
    }
    else{
        console.log(`O ${n1} e igual a ${n2}`)
    }
}

function menorNumero(n1, n2) {
    if(n1 < n2){
        console.log(`O ${n1} e menor que ${n2}`)
    }
    else if(n2 < n1){
        console.log(`O ${n2} e menor que ${n1}`)
    }
    else{
        console.log(`O ${n1} e igual a ${n2}`)
    }
}

maiorNumero(10,5)
maiorNumero(5,15)
maiorNumero(10,10)
menorNumero(5,10)
menorNumero(10,5)
menorNumero(5,5)