
import Usuario from "../models/Usuario.js"

const registrar = async (req, res) => {
    try {
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();
    } catch (error) {
        console.log(error);
    }
}


export { registrar }