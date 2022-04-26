var express = require('express');
var router = express.Router();
const señorityController = require('../controllers/señorityController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// router.post('/',cors(corsOptions),señorityController.create)
router.get('/',cors(corsOptions),señorityController.index)
router.get('/:id',cors(corsOptions),señorityController.show)
// router.put('/:id',cors(corsOptions),señorityController.update)
// router.delete('/:id',cors(corsOptions),señorityController.destroy);

module.exports = router