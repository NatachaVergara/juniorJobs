var express = require('express');
var router = express.Router();
const recruiterController = require('../controllers/recruiterController');

router.get('/',recruiterController.index);

router.get('/:id',recruiterController.show);

router.post('/',recruiterController.create);

router.put('/:id',recruiterController.update);

router.delete('/:id',recruiterController.destroy);

module.exports = router;