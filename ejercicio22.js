// Ejercicio 22 de JavaScript

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple']

const foodSchedule = [
  { name: 'Heura', isVegan: true },
  { name: 'Salmon', isVegan: false },
  { name: 'Tofu', isVegan: true },
  { name: 'Burger', isVegan: false },
  { name: 'Rice', isVegan: true },
  { name: 'Pasta', isVegan: true }
]

let withfruits = 0

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan === false && withfruits < fruits.length) {
    foodSchedule[i].name = fruits[withfruits]
    foodSchedule[i].isVegan = true
    withfruits++
  }
}

console.log('Your new food schedule:', foodSchedule)
