// Ejercicio 17 de JavaScript

const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}

for (let propiedad in alien) {
  console.log('His', propiedad, 'is:', alien[propiedad])
}
