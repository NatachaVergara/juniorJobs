var express = require('express');
var router = express.Router();
const scheduleController = require('../controllers/scheduleController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/', cors(corsOptions), scheduleController.index)
router.get('/:id', cors(corsOptions), scheduleController.show)

module.exports = router