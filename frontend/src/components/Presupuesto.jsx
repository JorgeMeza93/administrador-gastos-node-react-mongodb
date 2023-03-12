import React, { Fragment, useState } from 'react';

const Presupuesto = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Fragment>
        <h2 className='text-center font-bold text-xl uppercase'>Define un presupuesto inicial</h2>
        <form className='py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md' onSubmit={handleSubmit}>
            <div className='mb-5'>
                <label className='text-gray-700 uppercase font-bold' >Definir Presupuesto</label>
                <input type="number" min="0" step={.25} placeholder='' className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md' value={presupuesto} onChange={ e => setPresupuesto(e.target.value)} />
            </div>
            <input type="submit" value="Agregar Presupuesto" className='bg-emerald-600 p-3 w-full font-bold text-white uppercase hover:bg-emerald-700 cursor-pointer transition-colors' />
        </form>
    </Fragment>
  )
}

export default Presupuesto
