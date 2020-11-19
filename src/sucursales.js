const customFuction = require('../customFunction')
const pathJSON = './data/theaters.json';

let theatersList = customFuction.convertToArray(pathJSON)

module.exports = {
    theaters: theatersList.theaters,
    totalTheaters: theatersList.total_theaters
}