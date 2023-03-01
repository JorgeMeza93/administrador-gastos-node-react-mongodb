import React, { Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';

const Registrar = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    if([nombre.trim(), email.trim(), password.trim(), repetirPassword.trim(), telefono.trim()].includes("")){
        setAlerta({ msg: "Hay campos vacíos",
            error: true
        });
        return
    }
    if(password !== repetirPassword){
        setAlerta({ msg: "Los passwords no son inguales",
            error: true
        });
    }
    if(password.length < 8 ){
        setAlerta({msg: "El password es muy corto, agrega minímo 8 caracteres", 
            error: true
        });
    }
    setAlerta({})
  }
  const { msg } = alerta

  return (
    <Fragment>
        <div>
            <h1 className='text-emerald-500 font-bold text-5xl'>Crea una cuenta y comienza a administar tu dinero</h1>
            <h2 className='text-sky-500 font-bold text-3xl'>Es totalmente gratuito y no te toma más de cinco minutos</h2>
        </div>
        <div className='mt-20 shadow-lg px-5 py-10'>
            { msg &&  <Alerta alerta={alerta}/>}
            <form className='w-5/6 m-auto' onSubmit={handleSubmit} >
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Nombre</label>
                    <input type="text" placeholder='Tu nombre' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={nombre} onChange={ e => setNombre(e.target.value) }/>
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Email</label>
                    <input type="email" placeholder='Email de registro' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={email} onChange={ e => setEmail(e.target.value) } />
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Teléfono</label>
                    <input type="tel" placeholder='Número telefónico' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={telefono} onChange={ e => setTelefono(e.target.value)} />
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Password</label>
                    <input type="password" placeholder='Contraseña de la cuenta' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={password} onChange={ e => setPassword(e.target.value)} />
                </div>
                <div className='flex justify-around items-center m-5'>
                    <label className='font-bold w-1/4'>Repetir Password</label>
                    <input type="password" placeholder='Repite password' className='border-none p-2 bg-gray-100 w-3/4 rounded-md' value={repetirPassword} onChange={ e => setRepetirPassword(e.target.value)} />
                </div>
                <input type="submit" value="Iniciar Sesión" className='bg-emerald-500 text-white font-bold uppercase hover:cursor-pointer hover:bg-emerald-700 w-full py-2
                    rounded-md px-10 mt-10'/>
            </form>
            <nav className='mt-10 lg:flex lg:justify-between'>
                <Link className='block text-center my-5 text-gray-500' to="/">¿Ya tienes cuenta? Inicia Sesión</Link>
                <Link className='block text-center my-5 text-gray-500' to="/olvide-password">¿Olvidaste tu password?</Link>
            </nav>
        </div>
    </Fragment>
  )
}

export default Registrar