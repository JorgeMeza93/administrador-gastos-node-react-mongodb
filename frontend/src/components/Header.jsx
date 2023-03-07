import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='py-10 bg-emerald-600 '>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='font-bold text-2xl text-indigo-100'>Administrador de Gastos</h1>
            <nav className='flex gap-4'>
                <Link to="/admin" className='text-white text-sm uppercase font-bold' >Gastos</Link>
                <Link to="/perfil" className='text-white text-sm uppercase font-bold' >Perfil</Link>
                <button type='button' className='text-white text-sm uppercase font-bold' >Cerrar Sesión</button>
            </nav>
        </div>
    </header>
  )
}

export default Header