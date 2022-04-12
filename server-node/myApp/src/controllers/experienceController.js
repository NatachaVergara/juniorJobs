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
    }
}

module.exports = experienceController