import express from "express";
import { registrar, confirmar, login } from "../controllers/usuarioController.js";

const router = express.Router();

router.post("/registrar", registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", login);

export default router;