const db = require('../database/models');
const Speciality = require('../database/models/Speciality')

const specialityController = {
    index: (req, res) => {
        db.Speciality.findAll()
        .then((speciality) => {
            console.log(speciality)
            if(speciality) {
                res.json(speciality)
            }else {
                res.json({message: "no existen specialities"})
            }
        })
    },


    show: (req, res) => {
        const id = req.params.id;
        db.Speciality.findOne({where:{id: id}})
        .then((speciality) => {
            if(speciality){
                console.log(speciality)
                res.json(speciality)
            } else {
                res.json({message: "no existe el speciality buscado"})
            }
        })
    },


}

module.exports = specialityController