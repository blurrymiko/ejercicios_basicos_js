// Ejercicio 10 de JavaScript

const numbers = [12, 21, 38, 5, 45, 37, 6]
function average(numberList) {
  let suma = 0
  for (let i = 0; i < numberList.length; i++) {
    suma = suma + numberList[i]
  }

  let promedio = suma / numberList.length
  return promedio
}

let resultado = average(numbers)
console.log('La media es:', resultado)
