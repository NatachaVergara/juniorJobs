var express = require('express');
var router = express.Router();
const talentController = require('../controllers/talentController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

router.get('/',cors(corsOptions),talentController.index);

router.get('/:id',cors(corsOptions),talentController.show);

router.post('/',cors(corsOptions),talentController.create);

router.put('/:id',cors(corsOptions),talentController.update);

router.delete('/:id',cors(corsOptions),talentController.destroy);

module.exports = router;