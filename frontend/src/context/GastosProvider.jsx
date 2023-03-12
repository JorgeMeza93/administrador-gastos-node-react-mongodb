import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GastosContext = createContext();

const GastosProvider = ({children}) => {
    const [gastos, setGastos] = useState([]);
    const obtenerGastos = async () => {
        try {
            const token = localStorage.getItem("JWT");
            if( !token ) return;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/gastos`;
            const { data } = await axios.get(url, config);
           setGastos(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect( () => {
        obtenerGastos(); 
    }, []) 
    
    const guardarGasto = async (gasto) => {
        const token = localStorage.getItem("JWT");
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/gastos/nuevo`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                  }
            }
            const respuesta = await axios.post(url, gasto, config);
            //Quitamos los tres campos de mongo que no son necesarios
            const{ createdAt, updatedAt, __v, ...gastoAlmacenado } = respuesta.data;
            setGastos([gastoAlmacenado, ...gastos]);
        } catch (error) {
            console.log(error.response.data.msg);
            console.log(token);
        }
    }
    return (
        <GastosContext.Provider value={{ gastos, guardarGasto }} >
            {children}
        </GastosContext.Provider>
    )
}

export { GastosProvider };
export default GastosContext;


