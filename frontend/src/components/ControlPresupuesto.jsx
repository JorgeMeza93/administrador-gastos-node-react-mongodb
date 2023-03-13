import React, { Fragment } from 'react'
import useGastos from '../hooks/useGastos'

const ControlPresupuesto = () => {
  const { presupuesto } = useGastos()
  return (
    <Fragment>
        <div className='shadow-md flex w-full justify-between'>
            <div className='w-1/2'>
                Gráfica aqui
            </div>
            <div className='w-1/2'>
                <p><span className='text-emerald-600 font-bold'>Presupuesto: </span>{presupuesto}</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ControlPresupuesto