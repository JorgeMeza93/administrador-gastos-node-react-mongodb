import React, { useState }  from 'react';
import ListadoGastos from '../components/ListadoGastos';
import Formulario from '../components/Formulario';
import Presupuesto from "../components/Presupuesto";

const AdministrarGastos = () => {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
   <div className='flex flex-col md:flex-row'>
        <button type='button' className='bg-emerald-600 text-white uppercase mx-10 p-3 font-bold rounded-md mb-10 md:hidden' onClick={ e => setMostrarFormulario(!mostrarFormulario) } >
          {mostrarFormulario ? "Ocultar Formulario" : "Mostrar Formulario"}
        </button>
        <div className={`${mostrarFormulario ? "block" : "hidden"} md:block md:w-1/2 lg:w-2/5`} >
          <Presupuesto/>
        </div>
        <div className="md:1/2 lg:w-3/5">
            <ListadoGastos/>
        </div>
   </div>
  )
}

export default AdministrarGastos