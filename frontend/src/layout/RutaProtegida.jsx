import React, { Fragment } from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import useAuth from '../hooks/useAuth';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando ){
    return "cargando"
  }

  return (
    <Fragment>
      <div>RutaProtegida</div>
      { auth?._id ? <Outlet/> : <Navigate to="/" /> }
    </Fragment>
  )
}

export default RutaProtegida