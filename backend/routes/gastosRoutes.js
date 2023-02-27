import express from "express";
import { agregarGasto, obtenerGastos, obtenerGasto, actualizarGasto, borrarGasto } from "../controllers/gastosController.js";
import { checkAuth } from "../middlewares/middlewareAuth.js";

const router = express.Router();

router.post("/nuevo", checkAuth, agregarGasto);
router.get("/", checkAuth, obtenerGastos);
router.get("/:id", checkAuth, obtenerGasto);
router.patch("/:id", checkAuth, actualizarGasto);
router.delete("/:id", checkAuth, borrarGasto);

export default router;