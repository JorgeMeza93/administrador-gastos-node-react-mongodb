import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GastosContext = createContext();

const GastosProvider = ({children}) => {
    const [gastos, setGastos] = useState([]);
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [gasto, setGasto] = useState({});

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
            await setGastos(data);
        } catch (error) {
            console.log(error);
        }
    }
    const obtenerPresupuesto = async () => {
        try {
            const token = localStorage.getItem("JWT");
            if( !token) return;
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/perfil`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.get(url, config);
            setPresupuesto(respuesta.data.ingreso);
            if( presupuesto >= 0){
                setIsValidPresupuesto(true)
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect( () => {
        obtenerGastos();
        obtenerPresupuesto();
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
    const obtenerGastoID = async (id) => {
        const token = localStorage.getItem("JWT");
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/gastos/${id}`;
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const respuesta = await axios.get(url, config);
            setGasto(respuesta);

        } catch (error) {
            console.log(error);
        }
    }
    const actualizarGasto = async (gasto) => {
        const token = localStorage.getItem("JWT");
        const id = gasto._id;
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/gastos/${id}`;
        } catch (error) {
            console.log(error.response.data.msg)
        }
    }

    return (
        <GastosContext.Provider value={{ gastos, guardarGasto, presupuesto, setPresupuesto, isValidPresupuesto, gasto}} >
            {children}
        </GastosContext.Provider>
    )
}

export { GastosProvider };
export default GastosContext;


