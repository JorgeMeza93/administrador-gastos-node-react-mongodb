import { createContext, useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const GastosContext = createContext();

const GastosProvider = ({children}) => {
    const [gastos, setGastos] = useState([]);
    const [presupuesto, setPresupuesto] = useState(0);
    const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
    const [gasto, setGasto] = useState({});

    const { auth } = useAuth();

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
    }, [auth]) 
    
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
    const obtenerGastoId = async (id) => {
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
            return respuesta;
        } catch (error) {
            console.log(error);
        }
    }
    const actualizarGasto = async (id, gasto) => {
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
            if(respuesta.status === 200){
                const actualizado = await axios.patch(url, gasto, config);
                console.log(actualizado);
            }
            else{
                console.log("No encontrado");
            }
        }
        catch (error){
            console.log(error);
        }
    }

    const eliminarGasto = async (id) => {
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
            if(respuesta.status === 200){
                const eliminado = await axios.delete(url, config);
                console.log(eliminado);
            }
            return respuesta;
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <GastosContext.Provider value={{ gastos, guardarGasto, presupuesto, setPresupuesto, isValidPresupuesto, actualizarGasto, eliminarGasto }} >
            {children}
        </GastosContext.Provider>
    )
}

export { GastosProvider };
export default GastosContext;


