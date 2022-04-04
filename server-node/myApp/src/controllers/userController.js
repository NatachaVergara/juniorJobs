const db = require('../database/models');
const bcryptjs = require('bcryptjs');
const userController = {
    login: (req, res) => {


        let userType = req.body.userType; //Talent o Recruiter

        db.userType.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((user) =>{
            if(user){
                let validatePassword = bcryptjs.compareSync(req.body.password,user.password);
                if (validatePassword == true){
                    console.log("Bienvenido, " + req.body.email);
                    return res.json("Bienvenido, " + req.body.email);
                }
                else{
                    console.log("Las credenciales son inválidas");
                    return res.status(403).json(
                        {message: "Las credenciales son inválidas",
                        status: 403}
                    );
                }
            }
            else{
                console.log("No se encuentra el email registrado en nuestra base de datos");
                return res.status(404).json(
                    {message: "No se encuentra el email registrado en nuestra base de datos",
                    status: 404}
                );
            }
        })
        .catch(function(error){
            console.log("Ocurrió un error por favor vuelva a intentarlo");
        })    
    },

    register: (req, res) => {

    }
}

module.exports = userController;