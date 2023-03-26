import mongoose from "mongoose";
import generarId from "../helpers/generarId.js";
import bcrypt from "bcrypt";

const usuarioSchema = await mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    telefono: {
        type: String,
        default: null,
        trim: true
    },
    ingreso :{
        type: Number,
        default: 0
    },
    gastos: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    },
    token: {
        type: String,
        trim: true,
        default: generarId()
    },
    confirmado: {
        type: Boolean,
        default: false
    }
})
//Middleware antes de almacenarlo ejecuta lo siguiente
usuarioSchema.pre("save", async function(next){
    //Sólo ejecuta esta función si se modificó la contraseña
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function(passwordFormulario){
    return await bcrypt.compare(passwordFormulario, this.password)
}

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario