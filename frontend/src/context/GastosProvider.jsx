import { createContext, useState, useEffect } from "react";
import axios from "axios";

const GastosContext = createContext();
const GastosProvider = ({children}) => {

    const [gastos, setGastos] = useState([]);
    return (
        <GastosContext.Provider value={{ gastos }} >
            {children}
        </GastosContext.Provider>
    )
}

export { GastosProvider };
export default GastosContext;
