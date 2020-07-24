const Articulo = require('../models/Articulos');

const articuloController = {
	getArticulos : async (req, res) => {
		// Devolver toda la lista de articulos
		const articulos = await Articulo.find()
		res.json({
			response : articulos
		});
	},
	createArticulo : async (req, res) => {
		const {nombre, descripcion, precio, stock, imagen, tipo} = req.body;
		const nuevoArticulo = new Articulo({
			nombre,
			descripcion,
			precio,
			stock,
			imagen,
			tipo
		})
		const articuloGrabado = await nuevoArticulo.save();
		if (articuloGrabado._id) {
			res.json({
				success : true,
				articulo : articuloGrabado
			})
		}
		else {
			res.json({
				success : false,
				error : 'Ha ocurrido un error inesperado'
			})
		}
	},
	actualizarArticulo : async (req, res) => {
		// Actualizar un articulo
		const { id } = req.params;
		const { nombre, descripcion, precio, stock, imagen, tipo } = req.body;
		const articuloViejo = await Articulo.findOne({
			_id : id
		})
		const articuloAActualizar = await Articulo.findOneAndUpdate({
			_id : id
		}, {
			nombre : nombre || articuloViejo.nombre, 
			descripcion : descripcion || articuloViejo.descripcion, 
			precio: precio || articuloViejo.precio, 
			stock: stock || articuloViejo.stock,
			imagen: imagen || articuloViejo.imagen, 
			tipo: tipo || articuloViejo.tipo
		}, {
			returnNewDocument : true
		})

		res.json({
			success: true,
			response : articuloAActualizar
		})
	},
	borrarArticulo : async (req, res) => {
		// borrar un articulo
		const { id } = req.params;
		const articuloABorrar = await Articulo.findOneAndDelete({
			_id : id
		})
		const articuloExists = await Articulo.findOne({
			_id : id
		})
		const response = (!articuloExists && articuloABorrar) ? id : 'Ha ocurrido un error al borrar';
		res.json({
			success : (!articuloExists && articuloABorrar) ? true : false,
			response
		})
	}
}

module.exports = articuloController;