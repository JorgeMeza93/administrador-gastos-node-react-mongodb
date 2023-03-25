import React, { Fragment } from 'react';
import AdminNav from '../components/AdminNav';

const CambiarPassword = () => {
  return (
    <Fragment>
        <AdminNav/>
        <h2 className='font-bold text-emerald-500 text-3xl text-center mt-10' >Cambiar Password</h2>
        <p className='text-emerald-500 font-bold text-xl mt-5 mb-10 text-center' >Modifica tu <span className='text-sky-500'>Password aquí</span></p>
    </Fragment>
  )
}

export default CambiarPassword