const Opcion = require("../models/Opcion");

// POST /opciones
const createOpcion = async (req, res) => {
  const { idEle, idDet, idOpc, respuestaOpc } = req.body;
  const nuevaOpcion = new Opcion(idEle, idDet, idOpc, respuestaOpc);
  try {
    res
      .status(200)
      .json({ message: "Opción creada correctamente", opcion: nuevaOpcion });
  } catch (error) {
    res.status(500).json({ error: "Error al crear la opción" });
  }
};

// GET /opciones
const getOpciones = async (req, res) => {
  const opciones = [];

  try {
    res.status(200).json({ opciones });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las opciones" });
  }
};

// GET /opciones/:id
const getOpcionById = async (req, res) => {
  const { idEle, idDet, idOpc, respuestaOpc } = req.params;
  try {
    const opcionEncontrada = new Opcion(idEle, idDet, idOpc, respuestaOpc);

    res.status(200).json({ opcion: opcionEncontrada });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la opción" });
  }
};

// PUT /opciones/:id
const updateOpcion = async (req, res) => {
  const { idEle, idDet, idOpc, respuestaOpc } = req.params;
  try {
    res
      .status(200)
      .json({
        message: `Opción con idEle ${idEle}, idDet ${idDet}, idOpc ${idOpc} y respuesta ${respuestaOpc}actualizada correctamente`,
      });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la opción" });
  }
};

// DELETE /opciones/:id
const deleteOpcion = async (req, res) => {
  const { idEle, idDet, idOpc } = req.params;
  try {
    res
      .status(200)
      .json({
        message: `Opción con idEle ${idEle}, idDet ${idDet} y idOpc ${idOpc} eliminada correctamente`,
      });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la opción" });
  }
};

module.exports = {
  createOpcion,
  getOpciones,
  getOpcionById,
  updateOpcion,
  deleteOpcion,
};
