import React, { Fragment } from 'react';
import { Outlet, Navigate } from 'react-router-dom'; 
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  if(cargando ){
    return "cargando"
  }

  return (
    <Fragment>
      <Header/>
        { auth?._id ? <Outlet/> : <Navigate to="/" /> }
      <Footer/>
    </Fragment>
  )
}

export default RutaProtegida