const db = require('../database/models');

const talentController = {
    create: (req, res) => {
        res.json("Metodo creación de Talento");
    },

    update: (req, res) => {
        res.json("Metodo edición de Talento");
    },

    destroy: (req, res) => {
        res.json("Metodo borrado de Talento");
    },

    show: (req, res) => {
        res.json("Metodo visualización de Talento x id");
    },

    index: (req, res) => {
        res.json("Metodo visualización de todos los Talentos");
    }
    
}

module.exports = talentController;