import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ConfirmarCuenta = () => {

  const params = useParams();
  const { token } = params;
  const confirmarCuenta = async () => {
    try {
      const url = `http://localhost:4000/api/confirmar/${token}`
      const { data } = await axios.get(url)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect( () => {
    confirmarCuenta();
  }, [])

  return (
    <Fragment>
      <div>
        <h1 className='text-emerald-500 font-bold text-5xl'>Inicia Sesión y controla tu presupuesto de la mejor forma</h1>
        <h2 className='text-sky-500 font-bold text-3xl'>Administra tus gastos sin mucho esfuerzo</h2>
      </div>
    </Fragment>
  )
}

export default ConfirmarCuenta