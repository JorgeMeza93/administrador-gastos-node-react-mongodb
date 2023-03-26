import express from "express";
import { registrar, confirmar, login, verPerfil, olvidePassword, comprobarToken, nuevoPassword, actualizarPerfil } from "../controllers/usuarioController.js";
import { checkAuth } from "../middlewares/middlewareAuth.js";

const router = express.Router();

// Área Pública
router.post("/registrar", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", login);
router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:token", comprobarToken);
router.post("/olvide-password/:token", nuevoPassword);


// Área privada
router.get("/perfil", checkAuth, verPerfil);
router.patch("/perfil/:id", actualizarPerfil)


export default router;