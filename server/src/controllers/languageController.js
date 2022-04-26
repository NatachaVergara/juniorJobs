const db = require('../database/models');
const Language = require('../database/models/Language')

const languageController = {

    create: (req, res) => {
        db.Language.findOne({where: {
            language: req.body.language
        }})
        .then((language) => {
            if(language) {
                console.log('message: Este language ya se encuentra registrado');
                return res.json({message: 'Este language ya se encuentra registrado'})
            } else {
                console.log(req.body)
                db.Language.create({
                    language: req.body.language
                })
                .then((language) => {
                    console.log("nuevo language creado")
                    res.json(language)
                })
                .catch((err) => {
                    console.log("No se pudo crear el language en la base de datos")
                })
            }
        })
        .catch((err) => {
            console.log(`Se ha producido el siguiente error: `, err)
        })
    },

    index: (req, res) => {
        db.Language.findAll()
        .then((language) => {
            if(language) {
                console.log(language)
                return res.status(200).json(language)
            }else {
                console.log('No se encontró ningún language en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún language en nuestra base de datos'});
            }
        })
        .catch((error) => {
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    show: (req, res) => {
        const id = req.params.id
        db.Language.findOne({where:{id: id}})
        .then((language) => {
            console.log(language)
            return res.status(200).json(language)
        })
    }

}

module.exports = languageController