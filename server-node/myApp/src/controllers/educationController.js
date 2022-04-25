const db = require('../database/models');
const Education = require('../database/models/Education')

const educationController = {
    // create: (req, res) => {
    //     db.Education.findOne({where: {
    //         name: req.body.name
    //     }})
    //     .then((education)=>{
    //         if(education){
    //             return res.json({message: "este education ya se encuentra registrado"})
    //         } else {
    //             console.log(req.body)
    //             db.Education.create({
    //                 name: req.body.name
    //             }).then(education => {
    //                 console.log("education creado")
    //                 res.json(education)
    //             }).catch((error)=>{
    //                 console.log("No se pudo crear el registro en la base de datos")
    //             })
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(`Se ha producido el siguiente error: ${error}`)
    //     })
    // },

    index: (req, res) => {
        db.Education.findAll()
        .then((education) => {
            console.log(education)
            if(education) {
                res.json(education)
            }else {
                res.json({message: "no existen educations"})
            }
        })
    },

    show: (req, res) => {
        const id = req.params.id;
        db.Education.findOne({where:{id: id}})
        .then((education) => {
            if(education){
                console.log(education)
                res.json(education)
            } else {
                res.json({message: "no existe el education buscado"})
            }
        })
    },

    // update: (req, res) => {
    //     const id = req.params.id
    //     db.Education.findOne({where:{id: id}})
    //     .then(education => {
    //         education.update({
    //             name: req.body.name
    //         },{where: {id:req.params.id}})
    //         .then(newEducation => {
    //             res.json(newEducation)
    //         })
    //     })
    //     .catch({message: "no se pudo actualizar la education"})
    // },

    // destroy: (req, res) => {
    //     db.Education.findOne({where: {id:req.params.id}})
    //     .then(education => {
    //         education.destroy({
    //             where: {id:req.params.id}
    //         })
    //         .then(education => {
    //             res.json(education)
    //         })
    //     })
    //     .catch({message: "no se pudo eliminar la education"})
    // }
}

module.exports = educationController;