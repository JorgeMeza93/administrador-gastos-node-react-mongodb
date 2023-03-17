import React, { useState }  from 'react';
import ListadoGastos from '../components/ListadoGastos';
import Presupuesto from "../components/Presupuesto";
import useGastos from '../hooks/useGastos';
import imagenAñadir from "../img/nuevo-gasto.svg";
import imagenQuitar from "../img/menos-gasto.svg"
import Formulario from '../components/Formulario';


const AdministrarGastos = () => {

  const { presupuesto, isValidPresupuesto, gastos } = useGastos();
  const [mostrearGrafica, setMostrearGrafica] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
   <div className='flex flex-col md:flex-row gap-10'>
        <button type='button' className='bg-emerald-600 text-white uppercase mx-10 p-3 font-bold rounded-md mb-10 md:hidden' onClick={ e => setMostrearGrafica(!mostrearGrafica) } >
          {mostrearGrafica ? "Ocultar Gráfica" : "Mostrar Gráfica"}
        </button>
        <div className={`${mostrearGrafica ? "block" : "hidden"} md:block md:w-1/2 lg:w-2/5`} >
          <Presupuesto/>
          { mostrarFormulario && <Formulario/> }
          { isValidPresupuesto ? (
            <div className='w-10'>
              <img src={ !mostrarFormulario ? imagenAñadir : imagenQuitar} className="block mt-5" alt="Añadir nuevo gasto" onClick={ e =>  setMostrarFormulario(!mostrarFormulario) } />
            </div>
          ): null }
        </div>
        <div className="md:1/2 lg:w-3/5">
            <ListadoGastos/>
        </div>
   </div>
  )
}

export default AdministrarGastos