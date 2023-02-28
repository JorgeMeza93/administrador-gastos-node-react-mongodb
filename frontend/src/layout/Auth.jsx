import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <Fragment>
        <h1 className='text-center'>Administrador de Gastos</h1>
        <Outlet/>
    </Fragment>
  )
}

export default Auth