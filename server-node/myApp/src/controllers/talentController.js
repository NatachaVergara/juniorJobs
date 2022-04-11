const db = require('../database/models');
const Talent = require('../database/models/Talent')
const bcryptjs = require('bcryptjs')

const talentController = {
    create: (req, res) => {
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
        db.Talent.findOne({where:{id: id}})
        .then(talento => {
            talento.update({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                company: req.body.company,
                image: req.body.image,
                url: req.body.url
            },{where: {id:req.params.id}})
            .then(newTalent => {
                res.json(newTalent)
            })
        })
        .catch({message: "no se pudo actualizar el usuario"})
    },

    destroy: (req, res) => {
        db.Talent.findOne({where: {id:req.params.id}})
        .then(talento => {
            talento.destroy({
                where: {id:req.params.id}
            })
            .then(Talent => {
                res.json(Talent)
            })
        })
        .catch({message: "no se pudo eliminar el usuario"})
    },

    show: (req, res) => {
        const id = req.params.id;
        db.Talent.findOne({where:{id: id}})
        .then((talent) => {
            if(talent){
                console.log(talent);
                //res.json(talent)
                res.json({id: talent.id, name: talent.name, lastName: talent.lastName, email: talent.email, birthdate: talent.birthdate, image: talent.image, repository: talent.repository, url: talent.url, profile: talent.profile, phone: talent.phone})
            }else {
                res.json({message: "no existe el talento buscado"})
            }
        })
    },

    index: (req, res) => {
        db.Talent.findAll()
        // .then((talent) => {
        //     let tal = []
        //     if (talent) {
        //         for (var i = 0; i < talent.length; i++){
        //             tal.push(talent[i].dataValues)
        //             //console.log(tal)
        //             tal.slice(4,1)
        //             console.log(tal)
        //         }
        //     }
        // })

        db.Talent.findAll()
        .then((talent) => {
            console.log(talent);
            if (talent) {
                res.json({id: talent.id, name: talent.name, lastName: talent.lastName, email: talent.email, birthdate: talent.birthdate, image: talent.image, repository: talent.repository, url: talent.url, profile: talent.profile, phone: talent.phone}) 
            }else {
                res.json({message: "no existen talentos"})
            }
        })
    }
}

module.exports = talentController;