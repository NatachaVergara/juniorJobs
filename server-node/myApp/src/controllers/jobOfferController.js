const db = require('../database/models');

const jobOfferController = {
    create: (req, res) => {
        res.json("Metodo creación de una Oferta Laboral");
    },

    update: (req, res) => {
        res.json("Metodo actualizacion de una Oferta Laboral");
    },

    destroy: (req, res) => {
        res.json("Metodo para eliminar una Oferta Laboral");
    },

    show: (req, res) => {
        res.json("Metodo para mostrar una Oferta Laboral por el ID");
    },

    index: (req, res) => {
        res.json("Metodo para mostarr todas las ofertas laborales");
    }
    
}

module.exports = jobOfferController;