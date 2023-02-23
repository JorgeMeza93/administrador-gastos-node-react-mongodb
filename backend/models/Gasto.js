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
    },
    tipo: {
        type: String,
        required: true,
        trim: true
    },
    monto: {
       type: Number,
       required: true,
       default: 0
    },
    fecha: {
        type: Date,
        default: Date.now()
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