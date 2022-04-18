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
    }
}

module.exports = specialityController