const db = require('../database/models');
const Experience = require('../database/models/Experience')

const experienceController = {
    index: (req, res) => {
        db.Experience.findAll()
        .then((experience) => {
            console.log(experience)
            if(experience) {
                res.json(experience)
            }else {
                res.json({message: "no existen experiences"})
            }
        })
    },


    
    show: (req, res) => {
        const id = req.params.id;
        db.Experience.findOne({where:{id: id}})
        .then((experience) => {
            if(experience){
                console.log(experience)
                res.json(experience)
            } else {
                res.json({message: "no existe el experience buscado"})
            }
        })
    },


}

module.exports = experienceController