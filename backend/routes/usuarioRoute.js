const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', userController.getUsuarios);

// Ruta para obtener un usuario por su ID
router.get('/:id', userController.getUsuarioByCedula);

// Ruta para crear un nuevo usuario
router.post('/', userController.createUsuario);

// Ruta para actualizar un usuario existente
router.put('/:id', userController.updateUsuario);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUsuario);

module.exports = router;