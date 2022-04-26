var express = require('express');
var router = express.Router();
const languageController = require('../controllers/languageController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),languageController.index)
router.get('/:id',cors(corsOptions),languageController.show)
router.post('/',cors(corsOptions),languageController.create);

module.exports = router