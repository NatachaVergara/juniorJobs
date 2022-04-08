const db = require('../database/models');
const Recruiter = require('../database/models/Recruiter')

const recruiterController = {
    create: (req, res) => {
        //res.json("Metodo creación de Recruiter");
        console.log(req.body);
        const password = req.body.password;
        const hashPassword = bcryptjs.hashSync(password, 10);
        Recruiter.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            company: req.body.company,
            image: req.body.image,
            url: req.body.url
        }).then(recruit => {
            res.json(recruit)
        })
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