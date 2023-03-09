import React  from 'react';
import ListadoGastos from '../components/ListadoGastos';
import Formulario from '../components/Formulario';

const AdministrarGastos = () => {
  return (
   <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 lg:w-2/5'>
            <Formulario/>
        </div>
        <div className="md:1/2 lg:w-3/5">
            <ListadoGastos/>
        </div>
   </div>
  )
}

export default AdministrarGastos