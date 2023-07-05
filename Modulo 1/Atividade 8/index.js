let n1
let n2
let operador

function calculadora(n1,n2,operador) {
    switch (operador) {
        case "+":
            return n1 + n2
            break;
        
        case "-":
            return n1 - n2
            break;
        case "*":
            return n1 * n2
            break;

        case "/":
            return n1 / n2
            break;    
        default:
            return `Não existe essa operação`
            break;
    }
}

console.log(calculadora(2,2,"+"))
console.log(calculadora(4,2,"-"))
console.log(calculadora(2,4,"*"))
console.log(calculadora(10,2,"/"))
