const express = require('express');
const elecDetController = require('../controllers/elecDetController');

const router = express.Router();

// Ruta para obtener todos los detalles de elección
router.get('/', elecDetController.getDetalleElecciones);

// Ruta para obtener un detalle de elección por su ID
router.get('/:id', elecDetController.getDetalleEleccionById);

// Ruta para crear un nuevo detalle de elección
router.post('/', elecDetController.createDetalleEleccion);

// Ruta para actualizar un detalle de elección existente
router.put('/:id', elecDetController.updateDetalleEleccion);

// Ruta para eliminar un detalle de elección
router.delete('/:id', elecDetController.deleteDetalleEleccion);

module.exports = router;