var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");

//crear

router.get('/listar',cancionesController.listar);
router.get('/crear', cancionesController.crear);
router.post('/crear', cancionesController.guardar);



module.exports = router;
