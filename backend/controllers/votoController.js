import votoModel from "../models/Voto";


//** METODOS PARA EL CRUD */

//GET

export const getAllVlogs = async (req, res) => {

  try {
    const votos =  await votoModel.findAll();
    res.status(200).json(votos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los votos" });
  }

}


// GET BY ID 

export const getVotoById = async (req, res) => {
  try{
    const voto = await votoModel.findAll({
      where: {idVoto: req.params.idVoto}
    })
    res.status(200).json(voto);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener el voto" });
  }
}
// POST

export const createVoto = async (req, res) => {
  try {
    const voto = await votoModel.create(req.body);
    res.json({voto, message: "Voto creado correctamente"})
  
  } catch (error) {
    res.status(500).json({ error: "Error al crear el voto" });
  }
}


// PUT

export const updateVoto = async (req, res) => {
  try {
    await votoModel.update(req.body, {
      where: {idVoto: req.params.idVoto}
    })
    res.status(200).json({ message: "Voto actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el voto" });
  }
}

// DELETE

export const deleteVoto = async (req, res) => {
  try {
    await votoModel.destroy({
      where: {idVoto: req.params.idVoto}
    })
    res.status(200).json({ message: "Voto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el voto" });
  }
}