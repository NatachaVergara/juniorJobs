const db = require('../database/models');

const recruiterController = {
    create: (req, res) => {
        res.json("Metodo creación de Recruiter");
    },

    update: (req, res) => {
        res.json("Metodo edición de Recruiter");
    },

    destroy: (req, res) => {
        res.json("Metodo borrado de Recruiter");
    },

    show: (req, res) => {
        res.json("Metodo visualización de Recruiter x id");
    },

    index: (req, res) => {
        res.json("Metodo visualización de todos los Recruiters");
    }
}

module.exports = recruiterController;