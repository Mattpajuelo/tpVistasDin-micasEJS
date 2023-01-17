var express = require('express');
const router = express.Router();
const {detalle}=require('../controllers/menu');

/* GET users listing. */
router.get('/:id', detalle);

module.exports = router;
