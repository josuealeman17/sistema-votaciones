const express = require("express");
import db from "../database/db.js";
const cors = require("cors");


const userRoutes = require("./routes/usuarioRoute");
const opcionRoutes = require("./routes/opcionRoute");
const eleccionRoutes = require("./routes/eleccionRoute");
const votoRoutes = require("./routes/votoRoute");
const detalleRoutes = require("./routes/detEleccionRoute");
const mysql = require("mysql");

const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/opciones", opcionRoutes);
app.use("/api/elecciones", eleccionRoutes);
app.use("/api/detelecciones", detalleRoutes);

app.use("/api/votos", votoRoutes);

try {
  await db.authenticate();
  console.log("Conexión exitosa");
} catch (error) {
  console.log("Error de conexión", error);
}

app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});



app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
