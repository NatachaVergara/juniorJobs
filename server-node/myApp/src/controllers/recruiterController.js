const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const recruiterController = {
    create: (req, res) => {
        //res.json("Metodo creación de Recruiter");
        console.log(req.body);

        db.Recruiter.findOne({where: {
            email: req.body.email
        }})
        .then((recruiter) => {
            if(recruiter) {
                console.log('Este usuario ya se encuentra registrado');
                return res.json({message: 'Este usuario ya se encuentra registrado'});
            }
            else {
                const password = req.body.password;
                const hashPassword = bcryptjs.hashSync(password, 10);
                db.Recruiter.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashPassword,
                    company: req.body.company,
                    image: req.body.image,
                    url: req.body.url
                })
                .then((recruiter) => {
                    console.log('reclutador creado');
                    res.json(recruiter);
                })
                .catch(function(error){
                    console.log("No se pudo crear el registro en la base de datos");
                })
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
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