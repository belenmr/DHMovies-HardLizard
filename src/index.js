const homePage = require('./homePage');
const contacto = require('./contacto');
const preguntasFrecuentes = require('./preguntasFrecuentes');
const sucursales = require('./sucursales');
const enCartelera = require('./enCartelera');
const masVotadas = require('./masVotadas');


module.exports = {
    homePage: function (req,res) {
        res.write(`${homePage.title} \n\n`);
        res.write(`Total de peliculas en cartelera: ${homePage.totalMovies} \n\n`);
        homePage.movies.forEach(element => {
            res.write(element.title + '\n\n');
        });
        res.write('\n\n\n\n\n\n\n\n\n');
        res.write(homePage.footer);
        res.end();
    },

    masVotadas: function (req,res) {
        res.write(`${masVotadas.title} \n\n`);
        res.write(`Total de películas: ${masVotadas.totalMovies} \n\n`);
        res.write('Rating promedio: ' + masVotadas.average + '\n\n');
        masVotadas.movies.forEach(element => {
            res.write(`${element.title} \n`);
            res.write(`${element.vote_average} \n`);
            res.write(`${element.overview} \n\n`);
        });
        res.end();
    },

    enCartelera: function (req,res) {
        res.write(`${enCartelera.title} \n\n`);
        res.write(`Total de peliculas: ${enCartelera.totalMovies} \n\n`);
        enCartelera.movies.forEach(element => {
            res.write(element.title + '\n');
            res.write(element.overview + '\n\n');
        });
        res.end();
    },

    sucursales: function (req,res) {
        res.write('Nuestras Salas \n\n');
        res.write(`Total de salas: ${sucursales.totalTheaters} \n\n`);
        sucursales.theaters.forEach(element => {
            res.write(`Nombre: ${element.name} \n`);
            res.write(`Dirección: ${element.address} \n`);
            res.write(`Descrpción: ${element.description} \n\n`);
        });
        res.end();
    },

    contacto: function (req,res) {
        res.write(contacto.title + '\n\n')
        res.end(contacto.content);
    },

    faqs: function (req,res) {
        res.write('Preguntas Frecuentes \n\n');
        res.write('Total de preguntas: ' + preguntasFrecuentes.totalFaqs + '\n\n');
        preguntasFrecuentes.faqs.forEach(element => {
            res.write(`Pregunta: ${element.faq_title} \n`);
            res.write(`Respuesta: ${element.faq_answer} \n\n`);
        });
        res.end()
    }

}



