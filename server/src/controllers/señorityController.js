const db = require('../database/models');
const Seniority = require('../database/models/Seniority')

const señorityController = {
    // create: (req, res) => {
    //     db.Seniority.findOne({where: {
    //         name: req.body.name
    //     }})
    //     .then((señority)=>{
    //         if(señority){
    //             return res.json({message: "este señority ya se encuentra registrado"})
    //         } else {
    //             console.log(req.body)
    //             db.Seniority.create({
    //                 name: req.body.name
    //             }).then(señority => {
    //                 console.log("señority creado")
    //                 res.json(señority)
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
        db.Seniority.findAll()
        .then((señority) => {
            console.log(señority)
            if(señority) {
                res.json(señority)
            }else {
                res.json({message: "no existen señoritys"})
            }
        })
    },

    show: (req, res) => {
        const id = req.params.id;
        db.Seniority.findOne({where:{id: id}})
        .then((señority) => {
            if(señority){
                console.log(señority)
                res.json(señority)
            } else {
                res.json({message: "no existe el señority buscado"})
            }
        })
    },

    // update: (req, res) => {
    //     const id = req.params.id
    //     db.Seniority.findOne({where:{id: id}})
    //     .then(señority => {
    //         señority.update({
    //             name: req.body.name
    //         },{where: {id:req.params.id}})
    //         .then(newSeñority => {
    //             res.json(newSeñority)
    //         })
    //     })
    //     .catch({message: "no se pudo actualizar el señority"})
    // },

    // destroy: (req, res) => {
    //     db.Seniority.findOne({where: {id:req.params.id}})
    //     .then(señority => {
    //         señority.destroy({
    //             where: {id:req.params.id}
    //         })
    //         .then(señority => {
    //             res.json(señority)
    //         })
    //     })
    //     .catch({message: "no se pudo eliminar el señority"})
    // }
}

module.exports = señorityController;