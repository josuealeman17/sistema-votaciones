import db from "../database/db.js";

import { DataTypes } from "sequelize";

//define("nombre de la tabla", {atributos}, {opciones})
const userModel = db.define("usuario", {
  cedulaUsu: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  nombreUsu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidoUsu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sexoUsu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaNacimientoUsu: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  passwordUsu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


export default userModel;