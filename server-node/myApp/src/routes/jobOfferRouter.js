var express = require("express");
var router = express.Router();
const jobOfferController = require('../controllers/jobOfferController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.get('/',cors(corsOptions),jobOfferController.index);

router.get('/:id',cors(corsOptions),jobOfferController.show);

router.post('/',cors(corsOptions),jobOfferController.create);

router.put('/:id',cors(corsOptions),jobOfferController.update);

router.delete('/:id',cors(corsOptions),jobOfferController.destroy);

module.exports = router;
