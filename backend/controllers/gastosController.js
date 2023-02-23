import Gasto from "../models/Gasto.js"

const agregarGasto = async (req, res) => {
   try {
     const gasto = new Gasto(req.body);
     gasto.persona = req.usuario._id;
     const gastoGuardado = await gasto.save();
     res.json({ gastoGuardado, msg: "Gasto guardado" });
   }
   catch (error) {
     console.log(error) 
   }
}

const obtenerGastos = async (req, res) => {
  console.log(req)
  const gastos = await Gasto.find().where("persona").equals(req.usuario);
  res.json(gastos);
}

export { agregarGasto, obtenerGastos }