import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuarioRoutes.js";
import gastosRoutes from "./routes/gastosRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

//Habilitar la lectura de json
app.use(express.json());

// Conexión a base de datos
conectarDB();

// Configuracion de cors
const dominiosPermitidos = ["http://localhost:5173"]
const corsOption = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen está permitido. primer parametro es mensaje de error y el segundo es permite el acceso
            callback(null, true);
        }
        else{
            callback(new Error("No permitido por CORS"))
        }
    }
}
app.use(cors()); 

// Routing
app.use("/api", usuariosRoutes);
app.use("/api/gastos", gastosRoutes)

app.listen(port, () => {
    console.log("Hola MundO");
})