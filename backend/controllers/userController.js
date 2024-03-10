import userModel from "../models/Usuario";


//* METODOS PARA EL CRUD */

// GET ALL
// GET ALL
const getUsers = async (req, res) => {
  try {
    const users = await userModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET BY ID
const getUserById = async (req, res) => {
  const { cedulaUsu } = req.params;
  try {
    const user = await userModel.findByPk(cedulaUsu);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
const createUser = async (req, res) => {
  const { cedulaUsu, nombreUsu, apellidoUsu, sexoUsu, fechaNacimientoUsu, passwordUsu } = req.body;
  try {
    const newUser = await userModel.create({ cedulaUsu, nombreUsu, apellidoUsu, sexoUsu, fechaNacimientoUsu, passwordUsu });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT
const updateUser = async (req, res) => {
  const { cedulaUsu } = req.params;
  const { nombreUsu, apellidoUsu, sexoUsu, fechaNacimientoUsu, passwordUsu } = req.body;
  try {
    const user = await userModel.findByPk(cedulaUsu);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.update({ nombreUsu, apellidoUsu, sexoUsu, fechaNacimientoUsu, passwordUsu });
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  const { cedulaUsu } = req.params;
  try {
    const user = await userModel.findByPk(cedulaUsu);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};