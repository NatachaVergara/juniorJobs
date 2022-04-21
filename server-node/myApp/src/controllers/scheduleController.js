const db = require('../database/models');

const scheduleController = {

    index: (req, res) => {
        //res.json("Metodo visualización de todos los Schedules");
        db.Schedule.findAll()
        .then((allSchedule) => {
            if(allSchedule) {
                console.log(allSchedule);
                return res.status(200).json(allSchedule);
            }
            else {
                console.log('No se encontró ningún valor para schedule en nuestra base de datos');
                return res.status(404).json({message: 'No se encontró ningún valor para schedule en nuestra base de datos'});
            }
        })
        .catch(function(error){
            console.log(`Se ha producido el siguiente error: `, error);
        })
    }
}

module.exports = scheduleController;