const celsius = 1
const fahrenheit = 0


function conversorCelsius (celsius){
 return (celsius * 9) / 5 + 32
} 

function conversorFahrenheit (fahrenheit){
    return (fahrenheit - 32) * 5 / 9 
   } 
  

console.log(conversorCelsius(celsius))
console.log(conversorFahrenheit(fahrenheit))
