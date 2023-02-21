import express from "express";
import { registrar, confirmar, login } from "../controllers/usuarioController.js";
import { checkAuth } from "../middlewares/middlewareAuth.js";

const router = express.Router();

router.post("/registrar", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", login);
router.get("/perfil", checkAuth)


export default router;