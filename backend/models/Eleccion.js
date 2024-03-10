import db from "../database/db.js";

import { DataTypes } from "sequelize";

//define("nombre de la tabla", {atributos}, {opciones})
const electionModel = db.define("eleccion", {
  idEle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombreEle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fechaInicioEle: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaFinEle: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default electionModel;
