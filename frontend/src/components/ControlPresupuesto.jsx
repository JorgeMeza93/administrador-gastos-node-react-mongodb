import React, { Fragment, useState, useEffect } from 'react'
import useGastos from '../hooks/useGastos';

const ControlPresupuesto = () => {
  const { presupuesto, gastos } = useGastos();
  const [gastado, setGastado] = useState(0);
  const [disponoble, setDisponible] = useState(0);

  useEffect( () =>{
    
  }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }
  return (
    <Fragment>
        <div className='shadow-md lg:flex w-full justify-between mt-5 mb-10 rounded-lg p-3'>
            <div className='w-1/2'>
                Gráfica aqui
            </div>
            <div className='w-1/2'>
                <p><span className='text-emerald-600 font-bold'>Presupuesto: </span>{ formatearCantidad(presupuesto) }</p>
                <p><span className='text-emerald-600 font-bold'>Gastado: </span>{ formatearCantidad(gastado) }</p>
                <p><span className='text-emerald-600 font-bold'>Disponible: </span>{ formatearCantidad(disponoble) }</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ControlPresupuesto