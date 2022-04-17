const db = require('../database/models');
const Talent = require('../database/models/Talent')
const bcryptjs = require('bcryptjs')

const talentController = {
    create: (req, res) => {
        // console.log(req.body)
        db.Talent.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((talent) => {
                if (talent) {
                    console.log('message: Este usuario ya se encuentra registrado');
                    return res.json({ message: 'Este usuario ya se encuentra registrado' })
                } else {
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
                        id_Education: req.body.id_Education,
                     

                    }).then(talento => {
                        console.log('talento creado');
                        res.json(talento)
                    })
                        .catch(function (error) {
                            console.log("No se pudo crear el registro en la base de datos");
                            console.log(req.body)
                            console.error(error)
                        })
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    update: (req, res) => {
        const id = req.params.id
        db.Talent.findOne({ where: { id: id } })
            .then(talento => {
                if (talento) {
                    db.Talent.update({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        birthdate: req.body.birthdate,
                        image: req.body.image,
                        repository: req.body.repository,
                        url: req.body.url,
                        profile: req.body.profile,
                        phone: req.body.phone,
                        id_Seniority: req.body.id_Seniority,
                        id_Experience: req.body.id_Experience,
                        id_Speciality: req.body.id_Speciality,
                        id_Education: req.body.id_Education,
                        
                    }, { where: { id: req.params.id } })
                        .then(newTalent => {
                            console.log('Se actualizó el talento');
                            return res.status(201).json(
                                {
                                    message: 'Se actualizó el talento',
                                    talento

                                });
                        })
                        .catch(function (error) {
                            console.log("No se pudo crear el registro en nuestra base de datos", error);
                        })
                }
                else {
                    console.log('No se encontró el talento en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el talento en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    destroy: (req, res) => {
        db.Talent.findOne({ where: { id: req.params.id } })
            .then(talento => {
                if (talento) {
                    db.Talent.destroy({
                        where: { id: req.params.id }
                    })
                        .then(Talent => {
                            console.log('El talento ha sido borrado de nuestra base de datos');
                            return res.status(204).json({ message: 'El talento ha sido borrado nuestra base de datos' });
                        })
                        .catch(function (error) {
                            console.log("No se pudo borar el talento de nuestra base de datos", error);
                        })
                }
                else {
                    console.log('No se encontró el talento en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el talento en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    show: (req, res) => {
        const id = req.params.id;
        db.Talent.findOne({ where: { id: id } })
            .then((talent) => {
                if (talent) {
                    delete talent.dataValues.password
                    console.log(talent);
                    return res.status(200).json(talent.dataValues)
                } else {
                    console.log('No se encontró el talento en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró el talento en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    },

    index: (req, res) => {
        db.Talent.findAll()
            .then((allTalent) => {
                if (allTalent) {
                    for (let i = 0; i < allTalent.length; i++) {
                        delete allTalent[i].dataValues.password;
                    }
                    console.log(allTalent);
                    return res.status(200).json(allTalent);
                }
                else {
                    console.log('No se encontró ningún talento en nuestra base de datos');
                    return res.status(404).json({ message: 'No se encontró ningún talento en nuestra base de datos' });
                }
            })
            .catch(function (error) {
                console.log(`Se ha producido el siguiente error: `, error);
            })
    }
}

module.exports = talentController;