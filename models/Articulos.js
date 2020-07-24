const mongoose = require('mongoose');
const articuloSchema = new mongoose.Schema({
	nombre : String,
	descripcion : String,
	tipo : String,
	precio : Number,
	stock : Number,
	imagen : String
});

const Articulo = mongoose.model('articulo', articuloSchema);

module.exports = Articulo;