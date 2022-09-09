const express = require('express');
const router = express.Router();
const cancionesAPIController = require('../../controllers/api/cancionesAPIController');


router.get('/', cancionesAPIController.listar);
router.get('/detail/:id', cancionesAPIController.detalle);
// router.get('/editar/:id', cancionesAPIController.editar);

module.exports = router;