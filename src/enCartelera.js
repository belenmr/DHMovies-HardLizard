const customFuction = require('../customFunction')
const pathJSON = './data/movies.json';

let moviesList = customFuction.convertToArray(pathJSON)

module.exports = {
    title: 'En cartelera',
    movies: moviesList.movies,
    totalMovies: moviesList.total_movies
}
