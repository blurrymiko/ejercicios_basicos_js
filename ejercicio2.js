// Ejercicio 2 de JavaScript

// Bloque 1
const jedi = { nombre: 'Luke Skywalker', edad: 19 }

jedi.edad = 25

console.log(jedi.nombre, 'tiene', jedi.edad, 'años.')

// Bloque 2
let nombre = 'Leia'
let apellido = 'Organa'
let edad = 20

let mensaje =
  'Soy ' +
  nombre +
  ' ' +
  apellido +
  ', tengo ' +
  edad +
  ' años y soy la princesa de Alderaan.'

console.log(mensaje)

// Bloque 3
const sable1 = { nombre: 'Shoto de Yoda', precio: 1500 }
const sable2 = { nombre: 'Sable de Darth Vader', precio: 2000 }

let precioTotal = sable1.precio + sable2.precio

console.log('El precio total de los dos sables es:', precioTotal)

// Bloque 4

let precioBaseGlobal = 10000
precioBaseGlobal = 25000

const nave1 = { nombre: 'Ala-X', precioBase: 50000, precioFinal: 60000 }
const nave2 = {
  nombre: 'Halcón Milenario',
  precioBase: 70000,
  precioFinal: 80000
}

nave1.precioFinal = nave1.precioBase + precioBaseGlobal
nave2.precioFinal = nave2.precioBase + precioBaseGlobal

console.log(
  'El precio final del',
  nave1.nombre + ' es de',
  nave1.precioFinal,
  'créditos'
)
console.log(
  'El precio final del',
  nave2.nombre + ' es de',
  nave2.precioFinal,
  'créditos'
)
