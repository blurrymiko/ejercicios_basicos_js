// Ejercicio 15 de JavaScript

const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]

for (let i = 0; i < products.length; i++) {
  if (products[i].includes('Camiseta')) {
    console.log('Camisetas disponibles:', products[i])
  }
}
