import React from 'react';
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoEntretenimiento from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

const Gasto = ({gasto}) => {
  const fecha = new Date(gasto.fecha);
  const configFecha = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }
  console.log(fecha);
  return (
    <div className='shadow-md mb-3 flex justify-between items-center'>
      <div className="">

        <div className='p-3'>
          <p className='uppercase font-bold text-gray-500'>{gasto.tipo}</p>
          <p>{gasto.nombre}</p>
          <p className=''><span className='font-black'>Agregado el: </span> { fecha.toLocaleDateString("es-ES", configFecha) }</p>
        </div>
      </div>
      <p className='font-black text-lg'>${gasto.monto}</p>
    </div>
  )
}

export default Gasto