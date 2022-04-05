const db = require('../database/models');
const Talent = require('../database/models/Talent')

const talentController = {
    create: (req, res) => {
        //res.json("Metodo creación de Talento");
        console.log(req.body);
        const password = req.body.password;
        const hashPassword = bcryptjs.hashSync(password, 10);
        Talent.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashPassword,
            birthdate: req.body.birthdate,
            image: req.body.image,
            repository: req.body.repository,
            url: req.body.url,
            profile: req.body.profile,
            phone: req.body.phone
        }).then(talento => {
            res.json(talento)
        })
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