const express = require('express');
const opcionController = require('../controllers/opcionController');

const router = express.Router();

// Ruta para obtener todas las opciones
router.get('/', opcionController.getOpciones);

// Ruta para obtener una opción por su ID
router.get('/:id', opcionController.getOpcionById);

// Ruta para crear una nueva opción
router.post('/', opcionController.createOpcion);

// Ruta para actualizar una opción existente
router.put('/:id', opcionController.updateOpcion);

// Ruta para eliminar una opción
router.delete('/:id', opcionController.deleteOpcion);

module.exports = router;