var express = require('express');
var router = express.Router();

const crown2Controller_15 = require('../controllers/crown2Controller_15');
/* GET home page. */
router.get('/',crown2Controller_15.getCategory);

module.exports = router;