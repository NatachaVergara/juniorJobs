const db = require('../database/models');
const Talent = require('../database/models/Talent')
const bcryptjs = require('bcryptjs')

let usedEmail = 'This email has already been use. Do you already have an account?'
let notFound = 'Talent not found'



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
                    console.log(`message:${usedEmail}`);
                    return res.json({ message: usedEmail })
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
                        console.log('Talent created');
                        res.json({
                            message: 'Talent created',
                            talento
                        })
                    })
                        .catch(function (error) {
                            console.log("Talent not created");
                            console.log(req.body)
                            console.error("Error: ", error)
                        })
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
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
                            console.log('Talent updated', talento);
                            return res.status(201).json(
                                {
                                    message: 'Talent updated',
                                    talento

                                });
                        })
                        .catch(function (error) {
                            console.log("Not possible to update talent", error);
                        })
                }
                else {
                    console.log(notFound);
                    return res.status(404).json({ message: notFound });
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
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
                            console.log('Talent deleted');
                            return res.status(204).json({ message: 'Talent deleted' });
                        })
                        .catch(function (error) {
                            console.log("Talent not deleted", error);
                        })
                }
                else {
                    console.log(notFound);
                    return res.status(404).json({ message: notFound });
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
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
                    console.log(notFound);
                    return res.status(404).json({ message: notFound });
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
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
                    console.log(notFound);
                    return res.status(404).json({ message: notFound });
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
            })
    }
}

module.exports = talentController;