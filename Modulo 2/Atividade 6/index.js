function validarPalindromo(palavra) {
  const palavraInvertida = palavra.split('').reverse().join('');
  
  if (palavra === palavraInvertida) {
    return true;
  } else {
    return false;
  }
}

// Exemplo de uso:
const palavra = 'radar';
const ehPalindromo = validarPalindromo(palavra);
console.log(ehPalindromo); // true
