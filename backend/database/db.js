import { Sequelize } from "sequelize";


// Sequelize ('nombre de la base de datos', 'usuario', 'contraseña', {configuración})
const db = new Sequelize('database_app', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});


export default db;