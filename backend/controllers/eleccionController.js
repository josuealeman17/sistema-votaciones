const Eleccion = require("../models/Eleccion");

// POST /elecciones
const createEleccion = async (req, res) => {
  const { idEle, nombreEle, fechaInicioEle, fechaFinEle } = req.body;
  try {
    const nuevaEleccion = new Eleccion(idEle, nombreEle, fechaInicioEle, fechaFinEle);
    res
      .status(201)
      .json({ message: "Elección creada correctamente", eleccion: nuevaEleccion });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la elección" });
  }
};

// GET /elecciones
const getElecciones = async (req, res) => {
  const elecciones = [];

  try {
    res.status(200).json({ elecciones });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las elecciones" });
  }
};

// GET /elecciones/:id
const getEleccionById = async (req, res) => {
  const { idEle, nombreEle, fechaInicioEle, fechaFinEle } = req.params;
  try {
    const eleccionEncontrada = new Eleccion(idEle, nombreEle, fechaInicioEle, fechaFinEle);

    res.status(200).json({ eleccion: eleccionEncontrada });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la elección" });
  }
};

// PUT /elecciones/:id
const updateEleccion = async (req, res) => {
  const { idEle } = req.params;
  
  try {
    res.status(200).json({ message: `Elección con ID ${idEle} actualizada correctamente` });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la elección" });
  }
};

// DELETE /elecciones/:id
const deleteEleccion = async (req, res) => {
  const { idEle } = req.params;
  try {
    res.status(200).json({ message: `Elección con ID ${idEle} eliminada correctamente` });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la elección" });
  }
};

module.exports = {
  createEleccion,
  getElecciones,
  getEleccionById,
  updateEleccion,
  deleteEleccion,
};
