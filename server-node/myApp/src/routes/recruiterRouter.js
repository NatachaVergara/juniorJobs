var express = require('express');
var router = express.Router();
const recruiterController = require('../controllers/recruiterController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),recruiterController.index);

router.get('/:id',cors(corsOptions),recruiterController.show);

router.post('/',cors(corsOptions),recruiterController.create);

router.put('/:id',cors(corsOptions),recruiterController.update);

router.delete('/:id',cors(corsOptions),recruiterController.destroy);

module.exports = router;