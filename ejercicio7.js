// Ejercicio 7 de JavaScript

function greaterNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    console.log('El número mayor es:', numberOne)
  } else if (numberTwo > numberOne) {
    console.log('El número mayor es:', numberTwo)
  } else {
    console.log('Ambos números son iguales:', numberOne)
  }
}

greaterNumber(8, 5)
greaterNumber(5, 9)
greaterNumber(2, 2)
