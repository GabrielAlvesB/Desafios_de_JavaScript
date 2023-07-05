let n1
let n2

function validadorDeNumero(n1,n2) {
    
    if(n1 > n2){
        console.log(`o numero ${n1} e maior que o numero ${n2}`)
    }
    else if(n1 === n2){
        console.log(`o numero ${n1} e igual ao numero ${n2}`)
    }
    else{
        console.log(`o numero ${n1} e menor que o numero ${n2}`)
    }
}

validadorDeNumero(10, 5)
validadorDeNumero(10, 10)
validadorDeNumero(10, 15)