import React, { Fragment, useState } from 'react';
import Alerta from "./Alerta";
import useGastos from '../hooks/useGastos';

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [monto, setMonto] = useState(0);
  const [fecha, setFecha] = useState(Date.now());
  const [comentarios, setComentarios] = useState("");
  const [persona, setPersona] = useState("");
  const [alerta, setAlerta] = useState({});

  const { gastos } = useGastos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if([nombre.trim(), tipo.trim(), comentarios.trim()].includes("") || monto === 0){
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true
      })
    }
  }
  const { msg } = alerta;
  return (
    <Fragment>
      <p className='text-emerald-500 font-bold mb-10'>
        Añade tus gastos y <span className='text-sky-500 font-bold'>administralos</span>
      </p>
      { msg && <Alerta alerta={alerta} /> }
      <form className='py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md' onSubmit={handleSubmit} >
        <div className='mb-5'>
          <label htmlFor='nombre' className='text-gray-700 uppercase font-bold' >Nombre</label>
          <input id="nombre" type="text" placeholder='Nombre del Gasto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={nombre} onChange={ e => setNombre(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor='tipo' className='text-gray-700 uppercase font-bold' >Tipo de Gasto</label>
          <select className='block text-gray-400 w-full p-2 rounded-md border-2' value={tipo} onChange={ e => setTipo(e.target.value)} >
            <option value="salud">Salud</option>
            <option value="entretenimiento">Entretenimiento</option>
            <option value="educacion">Educación</option>
            <option value="comida">Comida</option>
            <option value="vestimenta">Vestimenta</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        <div className='mb-5'>
          <label htmlFor='monto' className='text-gray-700 uppercase font-bold'>Monto: </label>
          <input id="monto" type="number" min="0" step={.25} placeholder='Añade el monto' className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md' value={monto} onChange={e => setMonto(e.target.value)} />
        </div>
        <div className='mb-5'>
          <label htmlFor="fecha" className='text-gray-700 uppercase font-bold'>Fecha: </label>
          <input id='fecha' type="date" className='border-2 w-full p-2 mt-2 rounded-md ' value={fecha} onChange={e => setFecha(e.target.value)} />
        </div> 
        <div className='mb-5'>
          <label htmlFor='comentarios'className='text-gray-700 uppercase font-bold'>Comentarios</label>
          <textarea id='comentarios' placeholder='Añade comentarios sobre el gasto' className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' value={comentarios} onChange={ e => setComentarios(e.target.value)} >
          </textarea>
        </div>
        <input type="submit" value="Agregar Gasto" className='bg-emerald-600 p-3 w-full font-bold text-white uppercase hover:bg-emerald-700 cursor-pointer transition-colors' />
      </form>
    </Fragment>
  )
}

export default Formulario