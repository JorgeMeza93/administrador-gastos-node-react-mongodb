import Usuario from "../models/Usuario.js"
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/generarId.js";
import { json } from "express";

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

const login = async (req, res) => {
    const { email, password } = req.body;
    const resultado = await Usuario.findOne({ email });
    console.log(password)
    if(!resultado){
        const error = new Error("El usuario es inexistente");
        return res.status(404).json({ msg: error.message });
    }
    if( !resultado.confirmado){
        const error = new Error("El usuario no ha sido confirmado");
        return res.status(403).json({ msg: error.message });
    }
    if(await resultado.comprobarPassword(password)){
       res.json({ token: generarJWT(resultado.id) })
    }
    else{
        console.log("Password incorrecto");
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message })
    }
}

const verPerfil = (req, res) => {
    const { usuario } = req
    res.json(req.usuario);
}

const olvidePassword = async (req, res) => {
    const { email } = req.body;
    const existe = await Usuario.findOne({ email });
    if(!existe){
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        existe.token = generarId();
        await existe.save();
        res,json({ msg: "Hemos enviado un email con las instrucciones"});
    } catch (error) {
        
    }
}

const comprobarToken = async(req, res) => {
    const { token } = req.params;
    const tokenValido = await Usuario.findOne({ token });
    if(tokenValido){
        res.json({ msg: "Usuario válido, el token si existe" })
    }
    else{
        const error = new Error("Token no válido");
        return res.status(400).json({ msg: error.message })
    }
}

const nuevoPassword = async (req, res) => {
    const { token  } = req.params;
    const { password } = req.body;
    const resultado = await Usuario.findOne({ token });
    if(!resultado){
        const error = new Error("Ha ocurrido un error");
        return res.status(400).json({ msg: error.message });
    }
    try {
        resultado.token = null;
        resultado.password = password;
        await resultado.save();
        res.json({ msg: "El password ha sido cambiado correctamente" });
    } catch (error) {
        console.log(err);
    }
}

export { registrar, confirmar, login, verPerfil, olvidePassword, comprobarToken, nuevoPassword }