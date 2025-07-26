// Ejercicio 23 de JavaScript

const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 },
  { name: 'Spirited Away', durationInMinutes: 80 },
  { name: 'The Matrix', durationInMinutes: 136 },
  { name: 'Amélie', durationInMinutes: 110 },
  { name: 'Eternal Sunshine of the Spotless Mind', durationInMinutes: 108 }
]

const smallduration = []
const usualduration = []
const longduration = []

for (let i = 0; i < movies.length; i++) {
  const movie = movies[i]

  if (movie.durationInMinutes < 100) {
    smallduration.push(movie)
  } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
    usualduration.push(movie)
  } else if (movie.durationInMinutes > 200) {
    longduration.push(movie)
  }
}

console.log('Estas son las películas de menos de 100 minutos:', smallduration)
console.log(
  'Estas son las películas de entre 100 y 200 minutos:',
  usualduration
)
console.log('Estas son las películas de más de 200 minutos:', longduration)
