import db from "../database/db.js";

import { DataTypes } from "sequelize";

//define("nombre de la tabla", {atributos}, {opciones})
const votoModel = db.define("voto", {
  idVoto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },  
  cedulaUsu: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
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
  opcIdEle: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  opcIdDet: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  idOpc: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  fechaVoto: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default votoModel;
