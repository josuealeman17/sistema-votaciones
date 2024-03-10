const DetalleEleccion = require("../models/DetalleEleccion");

// POST /detalleelecciones
const createDetalleEleccion = async (req, res) => {
  const { idEle, idDet, numeroOpcionesDet } = req.body;

  const nuevoDetalleEleccion = new DetalleEleccion(
    idEle,
    idDet,
    numeroOpcionesDet
  );
  try {
    res
      .status(201)
      .json({
        message: "Detalle Elección creado correctamente",
        detalleEleccion: nuevoDetalleEleccion,
      });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Detalle Elección" });
  }
};

// GET /detalleelecciones
const getDetalleElecciones = async (req, res) => {
  const detalleElecciones = [];

  try {
    res.status(200).json({ detalleElecciones });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los Detalle Elecciones" });
  }
};

// GET /detalleelecciones/:idEle/:idDet
const getDetalleEleccionById = async (req, res) => {
  const { idEle, idDet, numeroOpcionesDet } = req.params;
  try {
    const detalleEleccionEncontrado = new DetalleEleccion(
      idEle,
      idDet,
      numeroOpcionesDet
    );

    res.status(200).json({ detalleEleccion: detalleEleccionEncontrado });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el Detalle Elección" });
  }
};

// PUT /detalleelecciones/:idEle/:idDet
const updateDetalleEleccion = async (req, res) => {
  const { idEle, idDet } = req.params;
  const { numeroOpcionesDet } = req.body;
  try {
    res
      .status(200)
      .json({
        message: `Detalle Elección con ID ${idEle} y ${idDet} actualizado correctamente`,
      });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el Detalle Elección" });
  }
};

// DELETE /detalleelecciones/:idEle/:idDet
const deleteDetalleEleccion = async (req, res) => {
  const { idEle, idDet } = req.params;
  try {
    res
      .status(200)
      .json({
        message: `Detalle Elección con ID ${idEle} y ${idDet} eliminado correctamente`,
      });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el Detalle Elección" });
  }
};

module.exports = {
  createDetalleEleccion,
  getDetalleElecciones,
  getDetalleEleccionById,
  updateDetalleEleccion,
  deleteDetalleEleccion,
};
