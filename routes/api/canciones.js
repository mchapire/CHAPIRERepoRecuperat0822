const express = require('express');
const router = express.Router();
const cancionesAPIController = require('../../controllers/api/cancionesAPIController');


router.get('/', cancionesAPIController.listar);
router.get('/detail/:id', cancionesAPIController.detalle);
// router.get('/generos', cancionesAPIController.generos);

module.exports = router;