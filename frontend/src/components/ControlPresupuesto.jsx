import React, { Fragment, useState, useEffect } from 'react'
import useGastos from '../hooks/useGastos';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
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
    const totalDisponible = presupuesto - gastado
    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
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
            <div className='w-3/5 px-7 py-5'>
                <CircularProgressbar value={porcentaje} styles={ buildStyles({
                  pathColor: porcentaje > 100 ? "#DC2626" : "#0EA5E9",
                  trailColor: "#e2dddd",
                  textSize: "7px",
                  textColor: "rgb(5 150 105)",
                }) } text={`${porcentaje}% Gastado`}/>
            </div>
            <div className='w-2/5'>
                <p><span className='text-emerald-600 font-bold'>Presupuesto: </span>{ formatearCantidad(presupuesto) }</p>
                <p><span className='text-emerald-600 font-bold'>Gastado: </span>{ formatearCantidad(gastado) }</p>
                <p><span className={`${ (presupuesto - gastado) < 0 ? "text-red-600" : "text-emerald-600"} font-bold`}>Disponible: </span>{ formatearCantidad(presupuesto - gastado) }</p>
                <div className=''>
                  <form>
                    <input type="submit" value="Ajustar presupuesto" className='my-10 py-3 px-5 bg-red-700 text-white rounded-lg'/>
                  </form>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ControlPresupuesto