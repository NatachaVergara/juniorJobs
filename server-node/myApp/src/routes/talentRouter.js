var express = require('express');
var router = express.Router();
const talentController = require('../controllers/talentController');

router.get('/',talentController.index);

router.get('/:id',talentController.show);

router.post('/',talentController.create);

router.put('/:id',talentController.update);

router.delete('/:id',talentController.destroy);

module.exports = router;