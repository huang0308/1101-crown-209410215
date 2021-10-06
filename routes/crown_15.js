var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('crown_15', {
        title: 'Express',
        name: 'Tzujia Huang',
        id: '209410215',
    });
});
module.exports = router;