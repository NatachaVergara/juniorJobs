var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skillController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),skillController.index)
router.get('/:id',cors(corsOptions),skillController.show)
router.post('/',cors(corsOptions),skillController.create);

module.exports = router