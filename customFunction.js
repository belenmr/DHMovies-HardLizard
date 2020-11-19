const encoding = 'utf-8';
let fs = require('fs');

module.exports = {
    convertToArray: function(pathJSON) {
        return JSON.parse(fs.readFileSync(pathJSON,encoding));
    },
    sortArray: function(array){
        let newArray = array.sort((a,b) => {
            let compare = 0;
            if (a.title > b.title) {
                compare = 1;
            }
            if (a.title < b.title) {
                compare = -1;
            }
            return compare;
        });
        return newArray;
    }
}