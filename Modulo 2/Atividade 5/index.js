function contarVogais(str) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vogais.includes(char)) {
      count++;
    }
  }

  return count;
}

// Exemplo de uso:
const texto = 'Olá, mundo!';
const quantidadeVogais = contarVogais(texto);
console.log(quantidadeVogais); // 4
