var express = require('express');
var router = express.Router();
const educationController = require('../controllers/educationController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// router.post('/',cors(corsOptions),educationController.create)
router.get('/',cors(corsOptions),educationController.index)
router.get('/:id',cors(corsOptions),educationController.show)
// router.put('/:id',cors(corsOptions),educationController.update)
// router.delete('/:id',cors(corsOptions),educationController.destroy);

module.exports = router