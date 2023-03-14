import React, { Fragment } from 'react'
import useGastos from '../hooks/useGastos';

const ControlPresupuesto = () => {
  const { presupuesto } = useGastos();
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
                <p><span className='text-emerald-600 font-bold'>Disponible: </span>{ formatearCantidad(presupuesto) }</p>
                <p><span className='text-emerald-600 font-bold'>Gastado: </span>{ formatearCantidad(presupuesto) }</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ControlPresupuesto