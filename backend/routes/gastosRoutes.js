import express from "express";
import { agregarGasto, obtenerGastos } from "../controllers/gastosController.js";
import { checkAuth } from "../middlewares/middlewareAuth.js";

const router = express.Router();

router.post("/nuevo", checkAuth, agregarGasto);
router.get("/", checkAuth, obtenerGastos);

export default router;