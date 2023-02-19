import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const conectarDB = async () => {
    try {
        const db = await mongoose.connect(process.env.Mongo_Uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const url = `${db.connection.host}:${db.connection.port}`
        console.log(`MongoDB conectado en ${url}`);
    } catch (error) {
        console.log(`error en ${error.message}`);
        process.exit(1)
    }
}

export default conectarDB;