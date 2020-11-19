const fs = require('fs');
const customFuction = require('../customFunction')
const pathJSON = './data/movies.json';

let movies = customFuction.convertToArray(pathJSON)


module.exports = {
    title: 'Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn.',
    movies: customFuction.sortArray(movies.movies),
    totalMovies: movies.total_movies,
    footer: "Recordá que podés visitar las secciones: \n - Cartelera \t - Más Votadas \t - Sucursales \t - Contacto \t - Preguntas Frecuentes \n"
}