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
            <div className='shadow-md'>
              { gastos.map( gasto =>( <Gasto key={gasto._id} gasto={gasto} />) )  }
            </div>
          </>
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay Gastos</h2>
            <p className='text-xl mt-5 mb-10 text-center'>Comienza agregando tus gastos</p>
          </>
        )}
    </Fragment>
  )
}

export default ListadoGastos