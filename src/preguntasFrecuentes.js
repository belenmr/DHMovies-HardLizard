const customFuction = require('../customFunction')
const pathJSON = './data/faqs.json';
let faqsList = customFuction.convertToArray(pathJSON);
//console.log(faqsList);

module.exports = {
    faqs: faqsList.faqs,
    totalFaqs: faqsList.total_faqs
}
