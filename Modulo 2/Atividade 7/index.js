function gerarArrayAleatorio(tamanho, maxValor) {
  const arr = [];
  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * (maxValor + 1)));
  }
  return arr;
}

const tamanho = 10;
const maxValor = 50;
const resultadoArray = gerarArrayAleatorio(tamanho, maxValor);
console.log(
  `O array gerado de números aleatórios é: [${resultadoArray.join(", ")}].`
);