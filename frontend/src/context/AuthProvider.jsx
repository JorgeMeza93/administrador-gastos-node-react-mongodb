import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);

    const autenticarUsuario = async () => {
        const jwtoken = localStorage.getItem("JWT");
        if(!jwtoken) {
            setCargando(false);
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtoken}`
            }
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/perfil`;
            const respuesta = await axios.get(url, config);
            setAuth(respuesta.data)
        } catch (error) {
            console.log(error.response.data.msg);
            setAuth({})
        }
        setCargando(false);
    }

    useEffect( () => {
        autenticarUsuario()
    }, [])

    const cerrarSesion = () => {
        localStorage.removeItem("JWT");
        setAuth({})
    }

    const actualizarPerfil = async datos => {
        const jwt = localStorage.getItem("JWT");
        if(!jwt){
            setCargando(false);
            return 
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`
            }
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/perfil/${datos._id}`;
            const respuesta = await axios.patch(url, datos, config);
            return {
                msg: "Actualizado Correctamente"
            }
        } catch (error) {
            return {
                msg: error.response.data.msg,
                error: true
            }
        }

    }

    const actualizarPassword = async (datos) => {
       const token = localStorage.getItem("JWT");
       if(!token){
        setCargando(false)
        return
       }
       const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
       }
       try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/api/actualizar-password`;
          const respuesta = await axios.put(url, datos, config);
          
       }
       catch (error) {
         console.log(error.response.data.msg);
       }
    }

    return (
        <AuthContext.Provider value={ {auth, setAuth, cargando, cerrarSesion, actualizarPerfil, actualizarPassword } }>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext;