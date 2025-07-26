// Ejercicio 12 de JavaScript

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
]
function removeDuplicates(list) {
  let noduplicates = []

  for (let i = 0; i < list.length; i++) {
    if (!noduplicates.includes(list[i])) {
      noduplicates.push(list[i])
    }
  }

  return noduplicates
}

let resultado = removeDuplicates(duplicates)
console.log('En la carta tenemos:', resultado)
