var express = require('express');
var router = express.Router();
const remoteController = require('../controllers/remoteController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),remoteController.index)
router.get('/:id',cors(corsOptions),remoteController.show)

module.exports = router