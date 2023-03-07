import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const { cerrarSesion } = useAuth();
  return (
    <header className='py-10 bg-emerald-600 '>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
            <h1 className='font-bold text-2xl text-indigo-100 text-center'>Administrador de Gastos</h1>
            <nav className='flex flex-col lg:flex-row gap-4 mt-5 lg:mt-0 items-center'>
                <Link to="/admin" className='text-white text-sm uppercase font-bold' >Gastos</Link>
                <Link to="/perfil" className='text-white text-sm uppercase font-bold' >Perfil</Link>
                <button type='button' className='text-white text-sm uppercase font-bold' onClick={cerrarSesion} >Cerrar Sesión</button>
            </nav>
        </div>
    </header>
  )
}

export default Header