var express = require('express');
var router = express.Router();
const experienceController = require('../controllers/experienceController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),experienceController.index)
router.get('/:id',cors(corsOptions),experienceController.show)
module.exports = router