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
            console.log(respuesta.data);
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

    return (
        <AuthContext.Provider value={ {auth, setAuth, cargando } }>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext;