const db = require('../database/models');
const Sequelize = require('sequelize')
const bcryptjs = require('bcryptjs');
const User = require('../database/models/index')
const userController = {
    login: (req, res) => {

        console.log(req.body);
        let userType = req.body.userType; //Talent o Recruiter

        if (userType == 'Talent') {

            db.Talent.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then((user) => {
                    if (user) {
                        let validatePassword = bcryptjs.compareSync(req.body.password, user.password);
                        if (validatePassword == true) {
                            delete user.dataValues.password;
                            console.log("Bienvenido, " + req.body.email);
                            return res.status(200).json(user);
                        }
                        else {
                            console.log("Las credenciales son inválidas");
                            return res.status(403).json(
                                "Las credenciales son inválidas"
                            );
                        }
                    }
                    else {
                        console.log("No se encuentra el email registrado en nuestra base de datos");
                        return res.status(404).json("No se encuentra el email registrado en nuestra base de datos"

                        );
                    }
                })
                .catch(function (error) {
                    console.log("Ocurrió un error por favor vuelva a intentarlo " + error);
                })
        } else if (userType == 'Recruiter') {
            db.Recruiter.findOne({
                where: {
                    email: req.body.email
                }
            })
                .then((user) => {
                    if (user) {
                        let validatePassword = bcryptjs.compareSync(req.body.password, user.password);
                        if (validatePassword == true) {
                            delete user.dataValues.password;
                            console.log("Bienvenido, " + req.body.email);
                            return res.status(200).json(user);
                        }
                        else {
                            console.log("Las credenciales son inválidas");
                            return res.status(403).json(
                                "Las credenciales son inválidas"
                            );
                        }
                    }
                    else {
                        console.log("No se encuentra el email registrado en nuestra base de datos");
                        return res.status(404).json(
                            "No se encuentra el email registrado en nuestra base de datos"

                        );
                    }
                })
                .catch(function (error) {
                    console.log("Ocurrió un error por favor vuelva a intentarlo");
                })
        }
    },

    // register: (req, res) => {
    //     console.log(req.body);
    //     const password = req.body.password;
    //     const hashPassword = bcryptjs.hashSync(password, 10);
    //     User.create({
    //         name: req.body.name,
    //         lastName: req.body.lastName,
    //         email: req.body.email,
    //         password: hashPassword,
    //         birthdate: req.body.birthdate,
    //         image: req.body.image,
    //         repository: req.body.repository,
    //         url: req.body.url,
    //         profile: req.body.profile,
    //         phone: req.body.phone
    //     }).then(user => {
    //         res.json(user)
    //     })
    // }
}

module.exports = userController;