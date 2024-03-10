const express = require('express');
const votoController = require('../controllers/votoController');

const router = express.Router();

// Ruta para obtener todos los votos
router.get('/', votoController.getVotos);

// Ruta para obtener un voto por ID
router.get('/:id', votoController.getVotoById);

// Ruta para crear un nuevo voto
router.post('/', votoController.createVoto);

// Ruta para actualizar un voto existente
router.put('/:id', votoController.updateVoto);

// Ruta para eliminar un voto
router.delete('/:id', votoController.deleteVoto);

module.exports = router;