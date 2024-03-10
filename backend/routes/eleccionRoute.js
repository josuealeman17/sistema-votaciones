const express = require('express');
const eleccionController = require('../controllers/eleccionController');

const router = express.Router();

// Ruta para obtener todas las elecciones
router.get('/', eleccionController.getElecciones);

// Ruta para obtener una elección por su ID
router.get('/:id', eleccionController.getEleccionById);

// Ruta para crear una nueva elección
router.post('/', eleccionController.createEleccion);

// Ruta para actualizar una elección existente
router.put('/:id', eleccionController.updateEleccion);

// Ruta para eliminar una elección
router.delete('/:id', eleccionController.deleteEleccion);

module.exports = router;