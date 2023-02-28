import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
       <div>
            <h1 className='text-emerald-500 font-bold text-5xl'>Inicia Sesión y controla tu presupuesto de la mejor forma</h1>
            <h2 className='text-sky-500 font-bold text-3xl'>Administra tus gastos sin mucho esfuerzo</h2>
       </div>
       <div className='mt-20 shadow-lg px-5 py-10'>
            <form className='w-5/6 m-auto'>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Email</label>
                    <input type="email" placeholder='Email de registro' className='border-none p-2 bg-gray-100 w-3/4 rounded-md'/>
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Password</label>
                    <input type="password" placeholder='Contraseña de la cuenta' className='border-none p-2 bg-gray-100 w-3/4 rounded-md'/>
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