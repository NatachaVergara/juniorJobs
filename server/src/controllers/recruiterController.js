const db = require('../database/models');
const bcryptjs = require('bcryptjs');


let notFound = 'Recluter not found'


const recruiterController = {
    create: (req, res) => {
        //res.json("Metodo creación de Recruiter");
        // console.log(req.body);

        db.Recruiter.findOne({
            where: {
                email: req.body.email
            }
        })
            .then((recruiter) => {
                if (recruiter) {
                    console.log('Email is already in our data base');
                    return res.json({ message: 'Email is already in our data base' })
                }
                else {
                    console.log(req.body);
                    const password = req.body.password;
                    const hashPassword = bcryptjs.hashSync(password, 10);
                    db.Recruiter.create({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hashPassword,
                        company: req.body.company,
                        image: req.body.image,
                        url: req.body.url
                    })
                        .then((recruiter) => {
                            console.log('Recruiter created');
                            res.json({
                                message: 'Recruiter created',
                                recruiter})
                        })
                        .catch(function (error) {
                            console.log("Not possible to create recruiter", error);
                            console.log(req.body)
                            console.error(error)
                        })
                }
            })
            .catch(function (error) {
                console.log(`Error: `, error);
            })
    },

    update: (req, res) => {
        //res.json("Metodo edición de Recruiter");
        console.log(req.body);
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    db.Recruiter.update({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        company: req.body.company,
                        image: req.body.image,
                        url: req.body.url
                    }, { where: { id: req.params.id } })
                        .then(() => {
                            console.log('Recruiter updated');
                            return res.status(201).json(
                                {
                                    message: 'Recruiter updated',
                                    recruiter
                                });
                        })
                        .catch(function (error) {
                            console.log("Not possible to delete recruiter", error);
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
        //res.json("Metodo borrado de Recruiter");
        console.log(req.body);
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    db.Recruiter.destroy({
                        where: { id: req.params.id }
                    })
                        .then(() => {
                            console.log('Recruiter deleted');
                            return res.status(204).json({ message: 'Recruiter deleted' });
                        })
                        .catch(function (error) {
                            console.log("Not possible to delet recruiter", error);
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
        //res.json("Metodo visualización de Recruiter x id");
        db.Recruiter.findByPk(req.params.id)
            .then((recruiter) => {
                if (recruiter) {
                    delete recruiter.dataValues.password;
                    console.log(recruiter);
                    return res.status(200).json(recruiter.dataValues);
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

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Recruiters");
        db.Recruiter.findAll()
            .then((allRecruiter) => {
                if (allRecruiter) {
                    for (let i = 0; i < allRecruiter.length; i++) {
                        delete allRecruiter[i].dataValues.password;
                    }
                    console.log(allRecruiter);
                    return res.status(200).json(allRecruiter);
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

module.exports = recruiterController;