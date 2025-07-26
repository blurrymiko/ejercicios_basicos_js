// Ejercicio 4 de JavaScript

// Tratando el array como base para cada bloque, para su comprobación individual habría que descomentar el array del bloque:

// Bloque 1

const aldeanos = ['Fibrilio', 'Narciso', 'Vacarena', 'Tendo', 'Nendo']
console.log('El aldeano es:', aldeanos[3])

//Bloque 2

//const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
aldeanos.push('Cervasio')
console.log('Los últimos aldeanos en llegar a la isla fueron:', aldeanos)

//Bloque 3

//const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
aldeanos[0] = 'Bambina'
console.log('Los primeros aldeanos en llegar a la isla fueron:', aldeanos)

//Bloque 4

//const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
aldeanos.reverse()
console.log('En orden descendente sereían:', aldeanos)

//Bloque 5
//const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
for (let i = 0; i < aldeanos.length; i++) {
  if (aldeanos[i] === 'Narciso') {
    aldeanos[i] = 'Canela'
  }
}

console.log('Ahora el listado es:', aldeanos)

//Bloque 6
//const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
let ultimoAldeano = aldeanos[aldeanos.length - 1]
console.log('El último aldeano en llegar fue:', ultimoAldeano)
