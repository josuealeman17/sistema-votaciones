import db from "../database/db.js";

import { DataTypes } from "sequelize";

//define("nombre de la tabla", {atributos}, {opciones})
const detalleEleccionModel = db.define("detalleEleccion", {
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
  numeroOpcionesDet: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default detalleEleccionModel;