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
  const gastos = await Gasto.find().where("persona").equals(req.usuario._id);
  res.json(gastos);
}

const obtenerGasto = async (req, res) => {
  const { id } = req.params;
  const gasto = await Gasto.findById(id);
  if(!gasto){
    return res.status(404).json({ msg: "No encontrado" });
  }
  if(gasto.persona._id.toString() !== req.usuario._id.toString()){
    return res.status(403).json({msg: "Acción no válida"})
  }
  if(gasto){
    return res.json(gasto);
  }
}

const actualizarGasto = async (req, res) => {
  const { id } = req.params;
  const gasto = await Gasto.findById(id);
  if(!gasto){
    return res.status(404).json({ msg: "No encontrado"})
  }
  if(gasto.persona._id.toString() !== req.usuario._id.toString()){
    return res.json({ msg: "Acción no válida"});
  }
  if(gasto){
    gasto.nombre = req.body.nombre || gasto.nombre;
    gasto.tipo = req.body.tipo || gasto.tipo;
    gasto.monto = req.body.monto || gasto.monto;
    gasto.fecha = req.body.fecha || gasto.fecha,
    gasto.comentarios = req.body.comentarios || gasto.comentarios,
    gasto.persona = req.body.persona || gasto.persona
    try {
      const gastoActualizado = await gasto.save();
      res.json({ gastoActualizado })
    } catch (error) {
      console.log(error);
    }
  }
}

const borrarGasto = async (req, res) => {
  const { id } = req.params;
  const gastoAEliminar = await Gasto.findById(id);
  if(!gastoAEliminar){
    return res.status(404).json({ msg: "No encontrado" });
  }
  if(gastoAEliminar.persona._id.toString() !== req.usuario._id.toString()){
    return res.json({ msg: "Acción no válida" });
  }
  try {
    await gastoAEliminar.deleteOne();
    return res.json({ msg: "Gasto eliminado correctamente" });
  } 
  catch (error) {
    console.log(error);
  }
}

export { agregarGasto, obtenerGastos, obtenerGasto, actualizarGasto, borrarGasto }