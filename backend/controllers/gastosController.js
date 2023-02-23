import Gasto from "../models/Gasto.js"

const agregarGasto = async (req, res) => {
   try {
     const gasto = new Gasto(req.body);
     gasto.persona = req.usuario._id;
     const gastoGuardado = await Gasto.save();
     res.json({ msg: "Guardado" });
   } catch (error) {
    
   }
}

const obtenerGastos = async (req, res) => {

}

export { agregarGasto, obtenerGastos }