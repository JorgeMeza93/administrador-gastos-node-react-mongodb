import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuarioRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//Habilitar la lectura de json
app.use(express.json());

// Conexión a base de datos
conectarDB();

// Routing
app.use("/api/gastos", usuariosRoutes);

app.listen(port, () => {
    console.log("Hola MundO");
})