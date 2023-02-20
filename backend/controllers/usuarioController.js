
import Usuario from "../models/Usuario.js"

const registrar = async (req, res) => {
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({email});
    if(existeUsuario){
        console.log(`Usuario ya existente ${existeUsuario}`);
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }
    try {
        const usuario = new Usuario(req.body);

        const usuarioGuardado = await usuario.save();
    } catch (error) {
        console.log(error);
    }
}


export { registrar }