import React, { Fragment, useState, useEffect } from 'react'
import useGastos from '../hooks/useGastos';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = () => {
  const { presupuesto, gastos } = useGastos();
  const [gastado, setGastado] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect( () =>{
    let totalGastado = 0;
    gastos.map( gasto => {
      totalGastado += gasto.monto;
      setGastado(totalGastado);
    });
    const nuevoPorcentaje = (((presupuesto - gastado) / presupuesto) * 100).toFixed(3);
    setTimeout( () => {
      setPorcentaje(nuevoPorcentaje);
    }, 500)
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
                <CircularProgressbar value={porcentaje} />
            </div>
            <div className='w-1/2'>
                <p><span className='text-emerald-600 font-bold'>Presupuesto: </span>{ formatearCantidad(presupuesto) }</p>
                <p><span className='text-emerald-600 font-bold'>Gastado: </span>{ formatearCantidad(gastado) }</p>
                <p><span className='text-emerald-600 font-bold'>Disponible: </span>{ formatearCantidad(presupuesto - gastado) }</p>
            </div>
        </div>
    </Fragment>
  )
}

export default ControlPresupuesto