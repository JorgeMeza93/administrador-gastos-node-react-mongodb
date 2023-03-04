import React, { Fragment, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Alerta from '../components/Alerta';

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [alerta, setAlerta] = useState({});

  const params = useParams();
  const { token } = params;
  const confirmarCuenta = async () => {
    try {
      const url = `http://localhost:4000/api/confirmar/${token}`;
      const { data } = await axios.get(url);
      setCuentaConfirmada(true);
      setAlerta({
        msg: data.msg
      })
      console.log(data);
    }
    catch (error) {
      console.log(error);
      setAlerta({msg: error.response.data.msg,
        error: true
      });
    }
    setCargando(false);
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
      <div className='mt-20 shadow-lg px-5 py-10 rounded-xl'>
        { !cargando && <Alerta alerta={alerta} /> }
        { cuentaConfirmada && ( <Link className='block text-center my-5 text-gray-500' to="/" >Inicia Sesión</Link> )}
      </div>
    </Fragment>
  )
}

export default ConfirmarCuenta