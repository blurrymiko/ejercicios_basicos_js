// Ejercicio 13 de JavaScript

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function nameFinder(nameList, nameToFind) {
  let posicion = nameList.indexOf(nameToFind)

  if (posicion !== -1) {
    console.log(
      true,
      'La persona existe y está en la posición número',
      posicion
    )
  } else {
    console.log(false, 'La persona no existe.')
  }
}

nameFinder(names, 'Jessica')
nameFinder(names, 'Rodrigo')
