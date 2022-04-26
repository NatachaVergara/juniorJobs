var express = require('express');
var router = express.Router();
const specialityController = require('../controllers/specialityController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),specialityController.index)
router.get('/:id',cors(corsOptions),specialityController.show)

module.exports = router