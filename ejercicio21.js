// Ejercicio 21 de JavaScript

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

console.log('Los usuarios mayores de 18 años son:')
for (let i = 0; i < users.length; i++) {
  if (users[i].years < 18) {
    console.log(users[i].name)
  }
}

console.log('Los usuarios todavía menores de edad son:')
for (let i = 0; i < users.length; i++) {
  if (users[i].years >= 18) {
    console.log(users[i].name)
  }
}
