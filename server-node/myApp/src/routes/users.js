var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
var cors = require('cors');

var corsOptions = {
  origin: '*',
  credentials:true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',cors(corsOptions),userController.login);

//router.post('/register',userController.register);

module.exports = router;
