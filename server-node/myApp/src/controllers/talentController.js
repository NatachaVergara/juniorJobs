const db = require('../database/models');
const Talent = require('../database/models/Talent')
const bcryptjs = require('bcryptjs')

const talentController = {
    create: (req, res) => {
        //res.json("Metodo creación de Talento");
        db.Talent.findOne({where: {
            email: req.body.email
        }})
        .then((talent) => {
            if(talent) {
                console.log('message: Este usuario ya se encuentra registrado');
                return res.json({message: 'Este usuario ya se encuentra registrado'})
            }else {
                console.log(req.body);
                const password = req.body.password;
                const hashPassword = bcryptjs.hashSync(password, 10);
                db.Talent.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: hashPassword,
                    birthdate: req.body.birthdate,
                    image: req.body.image,
                    repository: req.body.repository,
                    url: req.body.url,
                    profile: req.body.profile,
                    phone: req.body.phone,
                    //editDate: null,
                    id_Seniority: req.body.id_Seniority,
                    id_Experience: req.body.id_Experience,
                    id_Speciality: req.body.id_Speciality,
                    id_Education: req.body.id_Education
                }).then(talento => {
                    console.log('talento creado');
                    res.json(talento)
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
        const id = req.params.id
        const nuevoTalento = req.body
        db.Talent.findOne({where:{id: id}})
        .then(talento => {
            talento.update(nuevoTalento)
            .then(newTalent => {
                res.json(newTalent)
            })
        })
        //res.json("Metodo edición de Talento");
    },

    destroy: (req, res) => {
        const id = req.params.id
        db.Talent.findOne({where:{id: id}})
        .then(talento => {
            talento.destroy()
            .then(Talent => {
                res.json(Talent)
            })
        })
        //res.json("Metodo borrado de Talento");
    },

    show: (req, res) => {
        const id = req.params.id;
        db.Talent.findOne({where:{id: id}})
        .then((talent) => {
            res.json(talent)
        })
        //res.json("Metodo visualización de Talento x id");
    },

    index: (req, res) => {
        db.Talent.findAll()
        .then((talent) => {
            res.json(talent)
        })
        //res.json("Metodo visualización de todos los Talentos");
    }
    
}

module.exports = talentController;