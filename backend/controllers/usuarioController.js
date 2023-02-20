
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

const confirmar = async (req, res) => {
    const { token } = req.params;
    const usuarioConfirmar = await Usuario.findOne({ token });
    console.log("Encontrado");
    if(!usuarioConfirmar){
        const error = new Error("Token inexistente");
        return res.status(404).json( {msg: error.message } )
    }
    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true;
        await usuarioConfirmar.save();
        res.json({ msg: "Confirmando cuenta" })
    } catch (error) {
        console.log(error);
    }
}


export { registrar, confirmar }