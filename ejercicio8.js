// Ejercicio 8 de JavaScript

const avengers = [
  'Hulk',
  'Thor',
  'Iron Man',
  'Capitán América',
  'Spiderman',
  'Capitana Marvel'
]

function findLongestWord(stringList) {
  let longestword = ''

  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > longestword.length) {
      longestword = stringList[i]
    }
  }

  return longestword
}

let resultado = findLongestWord(avengers)
console.log('El nombre más largo es:', resultado)
