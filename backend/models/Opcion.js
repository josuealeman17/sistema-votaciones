import db from "../database/db.js";

import { DataTypes } from "sequelize";

//define("nombre de la tabla", {atributos}, {opciones})
const optionModel = db.define("opcion", {
  idEle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  idDet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  idOpc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  respuestaOpc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default optionModel;
