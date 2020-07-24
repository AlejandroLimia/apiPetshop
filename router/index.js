const express = require('express');
const articuloController = require('../controllers/articuloController');
const router = express.Router();

router.route("/articulos")
.get(articuloController.getArticulos)
.post(articuloController.createArticulo)

router.route("/articulo/:id")
.put(articuloController.actualizarArticulo)
.delete(articuloController.borrarArticulo)

module.exports = router; 