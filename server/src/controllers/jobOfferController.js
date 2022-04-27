const db = require('../database/models');

const jobOfferController = {
    create: (req, res) => {
        //res.json("Metodo creación de una Oferta Laboral");
        console.log(req.body);
        let talent = null;
        if(req.body.id_Talent){
            talent = req.body.id_Talent;
        }
        let skills = req.body.id_Skill;

        db.JobOffer.findOne({where: {
            id_Speciality: req.body.id_Speciality,
            id_Recruiter: req.body.id_Recruiter,
            id_Talent: null
        }})
        .then((jobOffer) => {
            if(jobOffer) {
                console.log('Esta oferta de trabajo ya existe');
                return res.status(202).json({message: 'Esta oferta de trabajo ya existe'});
            }
            else {
                db.JobOffer.create({
                    title: req.body.title,
                    description: req.body.description,
                    location: req.body.location,
                    id_Recruiter: req.body.id_Recruiter,
                    id_Schedule: req.body.id_Schedule,
                    id_Remote: req.body.id_Remote,
                    id_Talent: talent,
                    id_Seniority: req.body.id_Seniority,
                    id_Experience: req.body.id_Experience,
                    id_Speciality: req.body.id_Speciality
                })
                .then((jobOffer) => {
                    for(let i = 0; i<skills.length ; i++){
                        db.SkillJobOffer.create({
                            id_Skill: skills[i],
                            id_JobOffer: jobOffer.id
                        })
                        .then((skillJobOffer) => {
                            console.log("Skill "+i+ skillJobOffer+" agregada");
                        })
                        .catch(function(error){
                            console.log("No se pudo crear el registro en la tabla intermedia de nuestra base de datos", error);
                        })
                    }
                    
                    console.log('Oferta de trabajo creada');
                    res.status(201).json({message: 'Oferta de trabajo creada'});
                })
                .catch(function(error){
                    console.log("No se pudo crear el registro en nuestra base de datos", error);
                })
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    update: (req, res) => {
        //res.json("Metodo actualizacion de una Oferta Laboral");
        console.log(req.body);
        db.JobOffer.findByPk(req.params.id)
        .then((jobOffer) => {
            if(jobOffer) {
                db.JobOffer.update({
                    title: req.body.title,
                    description: req.body.description,
                    location: req.body.location,
                    id_Recruiter: req.body.id_Recruiter,
                    id_Schedule: req.body.id_Schedule,
                    id_Remote: req.body.id_Remote,
                    id_Talent: req.body.id_Talent,
                    id_Seniority: req.body.id_Seniority,
                    id_Experience: req.body.id_Experience,
                    id_Speciality: req.body.id_Speciality
                },{where: {id:req.params.id}})
                .then(()=>{
                    console.log('Se actualizó la oferta de trabajo');
                    return res.status(201).json({message: 'Se actualizó la oferta de trabajo'});
                })
                .catch(function(error){
                    console.log("No se pudo crear el registro en nuestra base de datos", error);
                })
            }
            else {
                console.log('No se encontró la oferta de trabajo en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró la oferta de trabajo en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    destroy: (req, res) => {
        //res.json("Metodo para eliminar una Oferta Laboral");
        console.log(req.body);
        db.JobOffer.findByPk(req.params.id)
        .then((jobOffer) => {
            if(jobOffer) {
                db.JobOffer.destroy({
                    where: {id:req.params.id}
                })
                .then(()=>{
                    console.log('La oferta de trabajo ha sido borrada de nuestra base de datos');
                    return res.status(204).json({message: 'La oferta de trabajo ha sido borrada nuestra base de datos'});
                })
                .catch(function(error){
                    console.log("No se pudo borar la oferta de trabajo de nuestra base de datos", error);
                })
            }
            else {
                console.log('No se encontró la oferta de trabajo en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró la oferta de trabajo en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    show: (req, res) => {
        //res.json("Metodo para mostrar una Oferta Laboral por el ID");
        db.JobOffer.findByPk(req.params.id)
        .then((jobOffer) => {
            if(jobOffer) {
                console.log(jobOffer);
                return res.status(200).json(jobOffer.dataValues);
            }
            else {
                console.log('No se encontró la oferta de trabajo en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró la oferta de trabajo en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    },

    index: (req, res) => {
        //res.json("Metodo para mostarr todas las ofertas laborales");
        let query = req.query;
        let talent = query.talent;
        let recruiter = query.recruiter;
        let speciality = query.speciality;

        if( talent == undefined && recruiter == undefined && speciality == undefined ){
            db.JobOffer.findAll()
            .then((allJobOffer) => {
                if(allJobOffer) {
                    console.log(allJobOffer);
                    return res.status(200).json(allJobOffer);
                }
                else {
                    console.log('No se encontró ninguna oferta laboral en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró ninguna oferta laboral en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
        } else {
            db.JobOffer.findAll({where:
                {
                 //   id_Speciality: speciality,
                    id_Recruiter: recruiter,
                   // id_Talent: talent
                }
            })
            .then((allJobOffer) => {
                if(allJobOffer) {
                    console.log(allJobOffer);
                    return res.status(200).json(allJobOffer);
                }
                else {
                    console.log('No se encontró ninguna oferta laboral en nuestra base de datos');
                    return res.status(404).json({message: 'No se encontró ninguna oferta laboral en nuestra base de datos'});
                }
            })
            .catch(function(error){
                console.log(`Se ha producido el siguiente error: `, error);
            })
        }
    }
    
}

module.exports = jobOfferController;