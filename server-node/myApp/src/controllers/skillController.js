const db = require('../database/models');
const Skill = require('../database/models/Skill')

const skillController = {

    create: (req, res) => {
        db.Skill.findOne({where: {
            name: req.body.name
        }})
        .then((skill) => {
            if(skill) {
                console.log('message: Este skill ya se encuentra registrado');
                return res.json({message: 'Este skill ya se encuentra registrado'})
            } else {
                console.log(req.body)
                db.Skill.create({
                    name: req.body.name
                })
                .then((skill) => {
                    console.log("nuevo skill creado")
                    res.json(skill)
                })
                .catch((err) => {
                    console.log("No se pudo crear el skill en la base de datos")
                })
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: `, err)
        })
    },

    index: (req, res) => {
        db.Skill.findAll()
        .then((skill) => {
            if(skill) {
                console.log(skill)
                return res.status(200).json(skill)
            }else {
                console.log('No se encontró ningún skill en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún skill en nuestra base de datos'});
            }
        })
        .catch((error) => {
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    show: (req, res) => {
        const id = req.params.id
        db.Skill.findOne({where:{id: id}})
        .then((skill) => {
            console.log(skill)
            return res.status(200).json(skill)
        })
    }

}

module.exports = skillController