import mongoose from "mongoose";

const gastosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    persona:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true
    },
    tipo: {
        type: String,
        required,
        trim: true
    },
    monto: {
       type: Number,
       required,
       default: 0
    },
    fecha: {
        type: Date
    },
    comentarios:{
        type: String,
        trim: true
    }

},{
    timestamps: true
})

const Gasto = mongoose.model("Gasto", gastosSchema);

export default Gasto;