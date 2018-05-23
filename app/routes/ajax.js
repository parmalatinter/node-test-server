const router = require('express').Router({});
const ajax = require('./../controllers/ajax.js');

router.get('/', (req, res) => ajax.get(req, res));
router.post('/', (req, res) => ajax.post(req, res));

module.exports = router;