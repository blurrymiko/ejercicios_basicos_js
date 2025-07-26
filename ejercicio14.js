// Ejercicio 14 de JavaScript

const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
]

function repeatCounter(list) {
  let counter = {}

  for (let i = 0; i < list.length; i++) {
    let word = list[i]

    if (counter[word]) {
      counter[word] = counter[word] + 1
    } else {
      counter[word] = 1
    }
  }

  for (let word in counter) {
    console.log('La palabra ' + word + 'se repite', counter[word], 'veces.')
  }
  return counter
}

repeatCounter(words)
