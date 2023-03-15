import React from 'react'

const Gasto = ({gasto}) => {
  const fecha = new Date(gasto.fecha);
  const configFecha = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }
  console.log(fecha);
  return (
    <div className='shadow-md mb-3'>
      <div className='flex justify-between items-center'>
        <div className='p-3'>
          <p className='uppercase font-bold text-gray-500'>{gasto.tipo}</p>
          <p>{gasto.nombre}</p>
          <p className=''><span className='font-black'>Agregado el: </span> { fecha.toLocaleDateString("es-ES", configFecha) }</p>
        </div>
        <p className='font-black text-lg'>${gasto.monto}</p>
      </div>
    </div>
  )
}

export default Gasto