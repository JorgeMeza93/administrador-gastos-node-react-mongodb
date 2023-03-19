import React from 'react';
import IconoAhorro from "../img/icono_ahorro.svg";
import IconoHogar from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoEntretenimiento from "../img/icono_ocio.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoOtros from "../img/icono_suscripciones.svg";
import IconoVestimenta from "../img/icono_vestimenta.svg"
import IconoEducacion from "../img/icono_educacion.svg";
import IconoBelleza from "../img/icono_belleza.svg";
import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import useGastos from '../hooks/useGastos';

const diccionarioIconos = {
  ahorro: IconoAhorro,
  hogar: IconoHogar,
  comida: IconoComida,
  gastos: IconoGastos,
  entretenimiento: IconoEntretenimiento,
  salud: IconoSalud,
  otros: IconoOtros,
  vestimenta: IconoVestimenta,
  educacion: IconoEducacion,
  belleza: IconoBelleza
}

const Gasto = ({gasto, setEditar, setMostrarFormulario}) => {
  const { obtenerGastoId, actualizarGasto } = useGastos();
  const fecha = new Date(gasto.fecha);
  const configFecha = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  }

  const leadingActions = () => {
    return (
      <LeadingActions>
        <SwipeAction onClick={ () => {
            setMostrarFormulario(true);
            setEditar(gasto);
            actualizarGasto(gasto._id)
          } 
        }>
          Editar
        </SwipeAction>
      </LeadingActions>
    )
  }
  const trailingActions = () => {
    return (
      <TrailingActions>
        <SwipeAction onClick={ () => console.log("Eliminando")}>
          Eliminar
        </SwipeAction>
      </TrailingActions>
    )
  }
  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className='shadow-md mb-3 flex justify-between items-center px-10 py-5 w-full'>
          <div className="flex flex-col md:flex-row md:items-center justify-center">
            <img src={diccionarioIconos[gasto.tipo]} className="block w-20"/>
            <div className='p-3'>
              <p className='uppercase font-bold text-gray-500'>{gasto.tipo}</p>
              <p>{gasto.nombre}</p>
              <p className=''><span className='font-black'>Agregado el: </span> { fecha.toLocaleDateString("es-ES", configFecha) }</p>
            </div>
          </div>
          <p className='font-black text-lg'>${gasto.monto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto