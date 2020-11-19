const customFuction = require('../customFunction')
const pathJSON = './data/movies.json';

let mostVotedMovies = customFuction.convertToArray(pathJSON).movies.filter(movie => movie.vote_average >= 7);
let accumulator = 0;

mostVotedMovies.forEach(element => {
    accumulator = accumulator + element.vote_average;
});


module.exports = {
    title: 'Mas Votadas',
    movies: mostVotedMovies,
    totalMovies: mostVotedMovies.length,
    average: (accumulator/mostVotedMovies.length).toFixed(2)
}