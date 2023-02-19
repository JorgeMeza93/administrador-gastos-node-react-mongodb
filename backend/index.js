import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 4000;
dotenv.config();

// Conexión a base de datos
conectarDB();

// Routing
app.use("/", (req, res) => {
    res.send("Hola Mundo")
})

app.listen(port, () => {
    console.log("Hola MundO");
})