import React, { Fragment, useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import useAuth from "../hooks/useAuth";

const EditarPerfil = () => {
  const { auth } = useAuth();
  const [perfil, setPerfil] = useState({});
  useEffect( () => {
    setPerfil(auth);
  }, [auth])
  return (
    <Fragment>
        <AdminNav/>
        <h2 className='font-bold text-emerald-500 text-3xl text-center mt-10' >Editar Perfil</h2>
        <p className='text-emerald-500 font-bold text-xl mt-5 mb-10 text-center' >Modifica tu <span className='text-sky-500'>Información</span></p>
        <div className='flex justify-center'>
            <div className='w-full md:w-1/2 bg-white shadow rounded-lg p-5'>
                <form>
                    <div className='my-3'>
                        <label className='uppercase font-bold text-gray-600'>Nombre</label>
                        <input type="text" className='border bg-gray-50 w-full p-2 mt-5 rounded-lg' name='nombre' value={perfil.nombre || "" } onChange={ e => setPerfil({
                            ...perfil,
                            [e.target.name]: e.target.value
                        }) } />
                    </div>
                    <div className='my-3'>
                        <label className='uppercase font-bold text-gray-600'>Email</label>
                        <input type="email" className='border bg-gray-50 w-full p-2 mt-5 rounded-lg' name='email' />
                    </div>
                    <div className='my-3'>
                        <label className='uppercase font-bold text-gray-600'>Teléfono</label>
                        <input type="tel" className='border bg-gray-50 w-full p-2 mt-5 rounded-lg' name='telefono' />
                    </div>
                    <input type="submit" value="Guardar Cambios" className='bg-emerald-500 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:bg-emerald-600' />
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default EditarPerfil