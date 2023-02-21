import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const checkAuth = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.usuario = await Usuario.findById(decoded.id).select("-password -token -confirmado");
            return next();
        } catch (error) {
            console.log(error);
            const e = new Error("Token no válido");
            return res.status(403).json({ msg: e.message });
        }
    }
    if(!token){
        console.log("No, no hay token bearer");
        const error = new Error("Token no válido o inexistente");
        res.status(403).json({ msg: error.message });
    }
   
    next();
}

export {checkAuth}