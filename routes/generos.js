var express = require('express');
var router = express.Router();
var generosController = require("../controllers/generosController");

router.get('/', generosController.generos)


module.exports = router;