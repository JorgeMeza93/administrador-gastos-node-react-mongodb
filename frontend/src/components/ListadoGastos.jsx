import React, { Fragment, useEffect, useState } from 'react';
import useGastos from "../hooks/useGastos";
import Gasto from './Gasto';
import { useNavigate } from "react-router-dom";


const ListadoGastos = ({ setEditar, setMostrarFormulario }) => {
  const { gastos } = useGastos();
  const [actualizar, setActualizar] = useState(false);
  const navigate = useNavigate();
 
  useEffect( () => {
    setActualizar(true);
  }, [gastos])
  return (
    <Fragment>
      { gastos.length ? (
          <>
            <h2 className='font-black text-3xl text-center'>Listado de Gastos</h2>
            <div className='shadow-md'>
              { actualizar ? gastos.map( gasto =>( <Gasto key={gasto._id} gasto={gasto} setEditar={setEditar} setMostrarFormulario={setMostrarFormulario} />) ) : null }
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