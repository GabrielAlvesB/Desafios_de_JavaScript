// 14 - Fibonacci
const Z = 5;

function fibonacciAteN(n) {
  let a = 0;
  let b = 1;
  let sequencia = [];

  while (a <= n) {
    sequencia.push(a);
    const temp = a;
    a = b;
    b = temp + b;
  }

  return sequencia;
}

const sequenciaFibonacci = fibonacciAteN(Z);
console.log(`A sequência de Fibonacci até ${Z} é:`, sequenciaFibonacci);