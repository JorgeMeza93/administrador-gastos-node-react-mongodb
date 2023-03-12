import React, { Fragment } from 'react';
import useGastos from "../hooks/useGastos";
import Gasto from './Gasto';

const ListadoGastos = () => {
  const { gastos } = useGastos();
  console.log(gastos);
  return (
    <Fragment>
      { gastos.length ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado de Gastos</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Administra tus <span className='text-emerald-600 font-bold'>Gastos</span></p>
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Comienza agregando tus gastos</p>
          </>
        )}
    </Fragment>
  )
}

export default ListadoGastos