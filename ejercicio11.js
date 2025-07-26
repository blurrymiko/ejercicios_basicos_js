// Ejercicio 11 de JavaScript

const mixedElements = [
  6,
  1,
  'Marvel',
  1,
  'hamburguesa',
  '10',
  'Prometeo',
  8,
  'Hola mundo'
]
function averageWord(list) {
  let sumaTotal = 0

  for (let i = 0; i < list.length; i++) {
    let element = list[i]

    if (typeof element === 'number') {
      sumaTotal = sumaTotal + element
    } else if (typeof element === 'string') {
      sumaTotal = sumaTotal + element.length
    }
  }

  let promedio = sumaTotal / list.length
  return promedio
}

let resultado = averageWord(mixedElements)
console.log('Promedio mixto:', resultado)
