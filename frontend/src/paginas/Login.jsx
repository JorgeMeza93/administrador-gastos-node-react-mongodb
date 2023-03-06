import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Alerta from '../components/Alerta';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if([email.trim(), password.trim()].includes("") ){
      setAlerta({ msg: "Todos los campos son obligatorios", error: true });
      return;
    }
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/login`;
      const respuesta = await axios.post(url, { email, password });
      localStorage.setItem("JWT", respuesta.data.token );
      navigate("/admin")
    }
    catch (error) {
      setAlerta({ msg: error.response.data.msg, error: true })
    }
  }

  const { msg } = alerta;
  return (
    <Fragment>
       <div>
            <h1 className='text-emerald-500 font-bold text-5xl'>Inicia Sesión y controla tu presupuesto de la mejor forma</h1>
            <h2 className='text-sky-500 font-bold text-3xl'>Administra tus gastos sin mucho esfuerzo</h2>
       </div>
       <div className='mt-20 shadow-lg px-5 py-10'>
          {msg && <Alerta alerta={alerta} />}
            <form className='w-5/6 m-auto' onSubmit={handleSubmit} >
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Email</label>
                    <input type="email" placeholder='Email de registro' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={email} onChange={ e => setEmail(e.target.value)} />
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Password</label>
                    <input type="password" placeholder='Contraseña de la cuenta' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={password} onChange={ e => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Iniciar Sesión" className='bg-emerald-500 text-white font-bold uppercase hover:cursor-pointer hover:bg-emerald-700 w-full py-2
                    rounded-md px-10 mt-10'/>
            </form>
            <nav className='mt-10 lg:flex lg:justify-between'>
                <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes cuenta? Registrate</Link>
                <Link className='block text-center my-5 text-gray-500' to="/olvide-password">¿Olvidaste tu password?</Link>
            </nav>
       </div>
    </Fragment>
  )
}

export default Login