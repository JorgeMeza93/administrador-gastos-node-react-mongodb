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

const obtenerGasto = async (req, res) => {
  const { id } = req.params;
  const gasto = await Gasto.findById(id);
  if(gasto.persona._id.toString() !== req.usuario._id.toString()){
    return res.status(403).json({msg: "Acción no válida"})
  }
  if(gasto){
    return res.json(gasto);
  }
}

const actualizarGasto = async (req, res) => {

}

const borrarGasto = async (req, res) => {

}

export { agregarGasto, obtenerGastos, obtenerGasto, actualizarGasto, borrarGasto }