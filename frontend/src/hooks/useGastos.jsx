import { useContext } from "react";
import GastosContext from "../context/GastosProvider"; 

const useGastos = () => {
    return useContext(GastosContext)
}

export default useGastos;