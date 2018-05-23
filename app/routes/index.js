const router = require('express').Router({});
const index = require('./../controllers/index.js');

router.get('/', (req, res) => index.get(req, res));
router.post('/', (req, res) => index.post(req, res));

module.exports = router;
